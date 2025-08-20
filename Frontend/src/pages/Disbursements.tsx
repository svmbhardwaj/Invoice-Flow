import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { 
  CreditCard, 
  CheckCircle, 
  Clock, 
  ArrowRight,
  Download,
  Receipt,
  Building,
  Calendar,
  TrendingUp
} from "lucide-react"

const disbursementTimeline = [
  { step: "Invoice Upload", status: "completed", time: "2 days ago" },
  { step: "Verification", status: "completed", time: "2 days ago" },
  { step: "Offer Accepted", status: "completed", time: "1 day ago" },
  { step: "Disbursement", status: "in-progress", time: "Processing..." },
  { step: "Payment Received", status: "pending", time: "Within 24hrs" }
]

const disbursementHistory = [
  {
    id: "DIS-001",
    invoiceId: "INV-12344",
    amount: "₹72,750",
    lender: "Demo Bank Ltd",
    disbursedDate: "2024-01-15",
    status: "completed",
    paymentMethod: "Bank Transfer",
    processingTime: "18 hours"
  },
  {
    id: "DIS-002", 
    invoiceId: "INV-12343",
    amount: "₹1,45,600",
    lender: "TradeFin Partner",
    disbursedDate: "2024-01-12",
    status: "completed",
    paymentMethod: "UPI",
    processingTime: "12 hours"
  },
  {
    id: "DIS-003",
    invoiceId: "INV-12342",
    amount: "₹89,100",
    lender: "Quick Finance Co",
    disbursedDate: "2024-01-08", 
    status: "completed",
    paymentMethod: "Bank Transfer",
    processingTime: "24 hours"
  }
]

export default function Disbursements() {
  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-success" />
      case 'in-progress':
        return <Clock className="h-4 w-4 text-warning animate-pulse" />
      case 'pending':
        return <Clock className="h-4 w-4 text-muted-foreground" />
      default:
        return null
    }
  }

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'completed':
        return <Badge variant="default" className="bg-success/20 text-success">Completed</Badge>
      case 'in-progress':
        return <Badge variant="outline" className="border-warning text-warning">Processing</Badge>
      case 'pending':
        return <Badge variant="secondary">Pending</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">Disbursements</h1>
          <p className="text-lg text-muted-foreground">
            Track your financing disbursements and payment history
          </p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-card border-border/50 hover:shadow-lg transition-all">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Total Disbursed</p>
                <h3 className="text-2xl font-bold text-foreground">₹3.07L</h3>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-success text-success-foreground flex items-center justify-center">
                <CreditCard className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/50 hover:shadow-lg transition-all">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">This Month</p>
                <h3 className="text-2xl font-bold text-foreground">₹2.18L</h3>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center">
                <TrendingUp className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/50 hover:shadow-lg transition-all">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Avg. Processing</p>
                <h3 className="text-2xl font-bold text-foreground">18hrs</h3>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-warning text-warning-foreground flex items-center justify-center">
                <Clock className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/50 hover:shadow-lg transition-all">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Active Deals</p>
                <h3 className="text-2xl font-bold text-foreground">1</h3>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center">
                <Building className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Current Processing Timeline */}
      <Card className="bg-gradient-card border-border/50 animate-fade-in" style={{ animationDelay: '200ms' }}>
        <CardHeader>
          <CardTitle className="text-foreground flex items-center gap-2">
            <ArrowRight className="h-5 w-5 text-primary" />
            Current Disbursement Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Invoice INV-12345 • ₹97,000</p>
              <Badge variant="outline" className="border-warning text-warning">In Progress</Badge>
            </div>
            
            <div className="space-y-4">
              {disbursementTimeline.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted">
                    {getStatusIcon(item.status)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{item.step}</p>
                    <p className="text-xs text-muted-foreground">{item.time}</p>
                  </div>
                  {item.status === 'in-progress' && (
                    <Progress value={60} className="w-24" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Disbursement History */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Disbursement History</h2>
          <Button variant="outline" className="hover:scale-105 transition-transform">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
        
        <div className="grid gap-6">
          {disbursementHistory.map((disbursement, index) => (
            <Card 
              key={disbursement.id} 
              className="bg-gradient-card border-border/50 hover:shadow-lg transition-all animate-fade-in"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-foreground">{disbursement.id}</h3>
                    <p className="text-sm text-muted-foreground">
                      Invoice {disbursement.invoiceId} • {disbursement.lender}
                    </p>
                  </div>
                  {getStatusBadge(disbursement.status)}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Amount</p>
                    <p className="text-lg font-bold text-success">{disbursement.amount}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Disbursed Date</p>
                    <p className="text-sm text-foreground">{disbursement.disbursedDate}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Payment Method</p>
                    <p className="text-sm text-foreground">{disbursement.paymentMethod}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Processing Time</p>
                    <p className="text-sm text-foreground">{disbursement.processingTime}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-success/10 border border-success/20">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span className="text-sm font-medium text-foreground">Payment Successful</span>
                  </div>
                  <Button variant="ghost" size="sm" className="hover:scale-105 transition-transform">
                    <Receipt className="h-4 w-4 mr-2" />
                    View Receipt
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Help Section */}
      <Card className="bg-gradient-to-r from-primary/5 via-transparent to-success/5 border-border/50">
        <CardContent className="p-8">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-bold text-foreground">Questions about Disbursements?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Need help tracking a payment or have questions about disbursement timelines? Our support team is here to help.
            </p>
            <Button variant="outline" className="hover:scale-105 transition-transform">
              <Calendar className="mr-2 h-4 w-4" />
              Contact Support
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}