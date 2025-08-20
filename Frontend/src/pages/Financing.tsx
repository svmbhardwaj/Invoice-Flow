import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Coins, 
  Clock, 
  CheckCircle, 
  TrendingUp, 
  Shield,
  ArrowRight,
  Banknote,
  Calendar
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const demoOffers = [
  {
    id: "OFF-001",
    invoiceId: "INV-12345",
    invoiceAmount: "₹1,00,000",
    offerAmount: "₹97,000",
    fee: "3%",
    rate: "12% APR",
    tenure: "90 days",
    lender: "Demo Bank Ltd",
    status: "pending",
    expiresIn: "48 hours"
  },
  {
    id: "OFF-002", 
    invoiceId: "INV-12346",
    invoiceAmount: "₹2,50,000",
    offerAmount: "₹2,42,500",
    fee: "3%",
    rate: "11% APR", 
    tenure: "60 days",
    lender: "TradeFin Partner",
    status: "pending",
    expiresIn: "72 hours"
  },
  {
    id: "OFF-003",
    invoiceId: "INV-12344",
    invoiceAmount: "₹75,000",
    offerAmount: "₹72,750",
    fee: "3%",
    rate: "13% APR",
    tenure: "45 days", 
    lender: "Quick Finance Co",
    status: "accepted",
    expiresIn: "Accepted"
  }
]

export default function Financing() {
  const [acceptingOffer, setAcceptingOffer] = useState<string | null>(null)
  const { toast } = useToast()

  const handleAcceptOffer = async (offerId: string) => {
    setAcceptingOffer(offerId)
    
    setTimeout(() => {
      toast({
        title: "Offer Accepted!",
        description: "Disbursement will be processed within 24 hours.",
        variant: "default"
      })
      setAcceptingOffer(null)
    }, 2000)
  }

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'accepted':
        return <Badge variant="default" className="bg-success/20 text-success">Accepted</Badge>
      case 'pending':
        return <Badge variant="outline" className="border-warning text-warning">Pending</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">Financing Offers</h1>
          <p className="text-lg text-muted-foreground">
            Review and accept financing offers for your verified invoices
          </p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-card border-border/50 hover:shadow-lg transition-all">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Total Offers</p>
                <h3 className="text-2xl font-bold text-foreground">3</h3>
                <p className="text-xs text-muted-foreground">Across all invoices</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center">
                <Coins className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/50 hover:shadow-lg transition-all">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Available Funding</p>
                <h3 className="text-2xl font-bold text-foreground">₹3.12L</h3>
                <p className="text-xs text-muted-foreground">Ready to disburse</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-success text-success-foreground flex items-center justify-center">
                <Banknote className="h-6 w-6" />
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
                <p className="text-xs text-muted-foreground">From acceptance</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-warning text-warning-foreground flex items-center justify-center">
                <Clock className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Offers List */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Your Offers</h2>
        
        <div className="grid gap-6">
          {demoOffers.map((offer, index) => (
            <Card 
              key={offer.id} 
              className="bg-gradient-card border-border/50 hover:shadow-lg transition-all animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-foreground flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      Offer {offer.id}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Invoice {offer.invoiceId} • {offer.lender}
                    </p>
                  </div>
                  <div className="text-right space-y-1">
                    {getStatusBadge(offer.status)}
                    <p className="text-xs text-muted-foreground">{offer.expiresIn}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Invoice Amount</p>
                    <p className="text-lg font-bold text-foreground">{offer.invoiceAmount}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Offer Amount</p>
                    <p className="text-lg font-bold text-success">{offer.offerAmount}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Fee</p>
                    <p className="text-lg font-bold text-foreground">{offer.fee}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Tenure</p>
                    <p className="text-lg font-bold text-foreground">{offer.tenure}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Interest Rate</p>
                      <p className="text-xs text-muted-foreground">{offer.rate}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    Competitive Rate
                  </Badge>
                </div>

                {offer.status === 'pending' && (
                  <div className="flex gap-3">
                    <Button 
                      onClick={() => handleAcceptOffer(offer.id)}
                      disabled={acceptingOffer === offer.id}
                      className="flex-1 bg-gradient-primary hover:bg-primary-hover shadow-lg hover:shadow-xl hover:scale-105 transition-all py-3 font-semibold"
                    >
                      {acceptingOffer === offer.id ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          Accept Offer
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                    <Button variant="outline" className="hover:scale-105 transition-transform">
                      Negotiate
                    </Button>
                  </div>
                )}

                {offer.status === 'accepted' && (
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-success/10 border border-success/20">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Offer Accepted</p>
                      <p className="text-xs text-muted-foreground">Disbursement in progress</p>
                    </div>
                    <Progress value={75} className="w-32" />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Help Section */}
      <Card className="bg-gradient-to-r from-primary/5 via-transparent to-success/5 border-border/50">
        <CardContent className="p-8">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-bold text-foreground">Need Help with Offers?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our financing experts can help you understand the terms and find the best offers for your business needs.
            </p>
            <Button variant="outline" className="hover:scale-105 transition-transform">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Consultation
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}