import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const sampleMSMEs = [
  {
    id: 1,
    name: "Sharma Textiles Pvt Ltd",
    sector: "Textiles",
    invoices: 24,
    totalValue: "₹45.2L",
    status: "Active",
    statusVariant: "success" as const,
    lastActivity: "2 hours ago"
  },
  {
    id: 2,
    name: "TechCraft Solutions",
    sector: "IT Services",
    invoices: 18,
    totalValue: "₹32.8L",
    status: "Pending Verification",
    statusVariant: "warning" as const,
    lastActivity: "1 day ago"
  },
  {
    id: 3,
    name: "Green Energy Systems",
    sector: "Renewable Energy",
    invoices: 12,
    totalValue: "₹78.9L",
    status: "Active",
    statusVariant: "success" as const,
    lastActivity: "3 hours ago"
  },
  {
    id: 4,
    name: "Mumbai Auto Parts",
    sector: "Automotive",
    invoices: 35,
    totalValue: "₹23.4L",
    status: "Document Required",
    statusVariant: "destructive" as const,
    lastActivity: "5 days ago"
  },
  {
    id: 5,
    name: "Fresh Foods Export",
    sector: "Food Processing",
    invoices: 28,
    totalValue: "₹56.7L",
    status: "Active",
    statusVariant: "success" as const,
    lastActivity: "1 hour ago"
  }
]

export function MSMETable() {
  return (
    <Card className="bg-gradient-card border-border/50">
      <CardHeader>
        <CardTitle className="text-foreground">Recent MSME Clients</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-border/50">
              <TableHead className="text-muted-foreground">Company</TableHead>
              <TableHead className="text-muted-foreground">Sector</TableHead>
              <TableHead className="text-muted-foreground">Invoices</TableHead>
              <TableHead className="text-muted-foreground">Total Value</TableHead>
              <TableHead className="text-muted-foreground">Status</TableHead>
              <TableHead className="text-muted-foreground">Last Activity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sampleMSMEs.map((msme) => (
              <TableRow key={msme.id} className="border-border/30 hover:bg-accent/50">
                <TableCell>
                  <div>
                    <div className="font-medium text-foreground">{msme.name}</div>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">{msme.sector}</TableCell>
                <TableCell className="text-foreground font-medium">{msme.invoices}</TableCell>
                <TableCell className="text-foreground font-medium">{msme.totalValue}</TableCell>
                <TableCell>
                  <Badge 
                    variant={
                      msme.statusVariant === 'success' ? 'default' :
                      msme.statusVariant === 'warning' ? 'secondary' :
                      'destructive'
                    }
                    className={
                      msme.statusVariant === 'success' ? 'bg-success/20 text-success hover:bg-success/30' :
                      msme.statusVariant === 'warning' ? 'bg-warning/20 text-warning hover:bg-warning/30' :
                      'bg-destructive/20 text-destructive hover:bg-destructive/30'
                    }
                  >
                    {msme.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">{msme.lastActivity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}