import React from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ShieldCheck, 
  Upload, 
  Banknote, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Zap,
  Clock,
  Shield
} from "lucide-react"
import { Link } from "react-router-dom"

export default function Landing() {
  const features = [
    {
      icon: Upload,
      title: "Upload Invoice",
      description: "Simple drag-and-drop interface with OCR extraction",
      color: "text-primary"
    },
    {
      icon: ShieldCheck,
      title: "AI Verification",
      description: "GST QR validation & duplicate detection",
      color: "text-success"
    },
    {
      icon: Banknote,
      title: "Instant Financing",
      description: "Get cash offers within 24 hours",
      color: "text-warning"
    },
    {
      icon: TrendingUp,
      title: "Track Progress",
      description: "Real-time status updates & analytics",
      color: "text-primary"
    }
  ]

  const stats = [
    { value: "₹50Cr+", label: "Financed" },
    { value: "2,500+", label: "MSMEs" },
    { value: "99.2%", label: "Accuracy" },
    { value: "24hrs", label: "Payout" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/80">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-success/5" />
        
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16">
          <div className="text-center space-y-8 animate-fade-in">
            <Badge className="mx-auto bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
              <Zap className="w-3 h-3 mr-1" />
              AI-Powered Invoice Verification
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Unlock Cash from
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Verified</span>
              <br />Invoices Instantly
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              India's first AI-powered invoice verification platform for MSMEs. 
              Get financing offers within 24 hours with 99.2% fraud detection accuracy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild
                size="lg" 
                className="bg-gradient-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Link to="/upload">
                  Start Verification
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-border/50 hover:bg-accent/50 px-8 py-3 rounded-lg transition-all hover:scale-105"
              >
                <Link to="/dashboard">
                  View Demo Dashboard
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center space-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Simple, secure, and lightning-fast invoice verification process
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="bg-gradient-card border-border/50 hover:shadow-lg transition-all hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Trust Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <Card className="bg-gradient-card border-border/50 p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-success/10 text-success border-success/20">
                  <Shield className="w-3 h-3 mr-1" />
                  Bank-Grade Security
                </Badge>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                  Trusted by Leading MSMEs
                </h3>
                <p className="text-muted-foreground">
                  Our AI-powered verification system has processed over ₹50Cr in invoices 
                  with industry-leading fraud detection accuracy.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-foreground">99.2% fraud detection accuracy</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-foreground">24-hour payout guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-foreground">Zero upfront costs</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-foreground">GSTIN-verified businesses only</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-success/10 to-primary/10 border border-success/20">
                <Clock className="h-8 w-8 text-success" />
                <div>
                  <h4 className="font-semibold text-foreground">Fast Processing</h4>
                  <p className="text-sm text-muted-foreground">Average verification time: 2 minutes</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-warning/10 border border-primary/20">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Secure Platform</h4>
                  <p className="text-sm text-muted-foreground">End-to-end encryption & compliance</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center space-y-8 bg-gradient-to-r from-primary/5 via-transparent to-success/5 rounded-2xl p-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Ready to Unlock Your Cash Flow?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of MSMEs who trust TradeFin for secure invoice verification and instant financing.
          </p>
          
          <Button 
            asChild
            size="lg" 
            className="bg-gradient-primary hover:bg-primary-hover text-primary-foreground font-semibold px-12 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <Link to="/upload">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}