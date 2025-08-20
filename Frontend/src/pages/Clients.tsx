import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Users, Search, Building, TrendingUp, FileText, AlertCircle } from "lucide-react"

const sampleClients = [
  {
    id: 1,
    name: "Sharma Textiles Pvt Ltd",
    gstin: "07AAACG2115R1ZN",
    sector: "Textiles & Garments",
    invoicesUploaded: 47,
    totalFinanced: "₹1.2Cr",
    status: "Active",
    statusVariant: "success" as const,
    riskScore: "Low",
    joinedDate: "Jan 2024",
    lastActivity: "2 hours ago"
  },
  {
    id: 2,
    name: "TechCraft Solutions India",  
    gstin: "27AAACG2115R1ZM",
    sector: "IT Services",
    invoicesUploaded: 32,
    totalFinanced: "₹85L",
    status: "Pending Verification",
    statusVariant: "warning" as const,
    riskScore: "Medium",
    joinedDate: "Feb 2024",
    lastActivity: "1 day ago"
  },
  {
    id: 3,
    name: "Green Energy Systems Ltd",
    gstin: "09AAACG2115R1ZL",
    sector: "Renewable Energy",
    invoicesUploaded: 28,
    totalFinanced: "₹2.1Cr",
    status: "Premium",
    statusVariant: "success" as const,
    riskScore: "Low",
    joinedDate: "Dec 2023",
    lastActivity: "3 hours ago"
  },
  {
    id: 4,
    name: "Mumbai Auto Components",
    gstin: "27AAACG2115R1ZK",
    sector: "Automotive",
    invoicesUploaded: 63,
    totalFinanced: "₹95L",
    status: "Under Review",
    statusVariant: "destructive" as const,
    riskScore: "High",
    joinedDate: "Mar 2024",
    lastActivity: "5 days ago"
  },
  {
    id: 5,
    name: "Fresh Foods Export Pvt Ltd",
    gstin: "07AAACG2115R1ZJ",
    sector: "Food Processing",
    invoicesUploaded: 41,
    totalFinanced: "₹1.4Cr",
    status: "Active",
    statusVariant: "success" as const,
    riskScore: "Low",
    joinedDate: "Nov 2023",
    lastActivity: "1 hour ago"
  }
]

const clientStats = [
  { title: "Total Clients", value: "247", icon: Users, change: "+12 this month" },
  { title: "Active MSMEs", value: "198", icon: Building, change: "80% active rate" },
  { title: "Avg Monthly Volume", value: "₹4.2Cr", icon: TrendingUp, change: "+18% growth" },
  { title: "Pending Reviews", value: "12", icon: AlertCircle, change: "Review required" },
]

export default function Clients() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredClients = sampleClients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.gstin.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.sector.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">MSME Clients</h1>
          <p className="text-muted-foreground">
            Manage and monitor your MSME client portfolio
          </p>
        </div>
        <Button className="bg-gradient-primary hover:bg-primary-hover">
          Add New Client
        </Button>
      </div>

      {/* Client Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {clientStats.map((stat) => (
          <Card key={stat.title} className="bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <h3 className="text-2xl font-bold text-foreground mt-2">{stat.value}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search and Filters */}
      <Card className="bg-gradient-card border-border/50">
        <CardHeader>
          <CardTitle className="text-foreground">Client Directory</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search clients by name, GSTIN, or sector..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>

          <div className="rounded-md border border-border/50">
            <Table>
              <TableHeader>
                <TableRow className="border-border/50">
                  <TableHead className="text-muted-foreground">Company Details</TableHead>
                  <TableHead className="text-muted-foreground">GSTIN</TableHead>
                  <TableHead className="text-muted-foreground">Sector</TableHead>
                  <TableHead className="text-muted-foreground">Invoices</TableHead>
                  <TableHead className="text-muted-foreground">Total Financed</TableHead>
                  <TableHead className="text-muted-foreground">Risk Score</TableHead>
                  <TableHead className="text-muted-foreground">Status</TableHead>
                  <TableHead className="text-muted-foreground">Last Activity</TableHead>
                  <TableHead className="text-muted-foreground">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredClients.map((client) => (
                  <TableRow key={client.id} className="border-border/30 hover:bg-accent/50">
                    <TableCell>
                      <div>
                        <div className="font-medium text-foreground">{client.name}</div>
                        <div className="text-sm text-muted-foreground">Joined {client.joinedDate}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs bg-muted/50 px-2 py-1 rounded text-foreground">
                        {client.gstin}
                      </code>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{client.sector}</TableCell>
                    <TableCell className="text-foreground font-medium">{client.invoicesUploaded}</TableCell>
                    <TableCell className="text-foreground font-medium">{client.totalFinanced}</TableCell>
                    <TableCell>
                      <Badge 
                        variant="outline"
                        className={
                          client.riskScore === 'Low' ? 'border-success text-success' :
                          client.riskScore === 'Medium' ? 'border-warning text-warning' :
                          'border-destructive text-destructive'
                        }
                      >
                        {client.riskScore}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={
                          client.statusVariant === 'success' ? 'default' :
                          client.statusVariant === 'warning' ? 'secondary' :
                          'destructive'
                        }
                        className={
                          client.statusVariant === 'success' ? 'bg-success/20 text-success hover:bg-success/30' :
                          client.statusVariant === 'warning' ? 'bg-warning/20 text-warning hover:bg-warning/30' :
                          'bg-destructive/20 text-destructive hover:bg-destructive/30'
                        }
                      >
                        {client.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">{client.lastActivity}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        View Profile
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredClients.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No clients found matching your search criteria.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}