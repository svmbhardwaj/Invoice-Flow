import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { HelpCircle, MessageCircle, Mail, Phone } from "lucide-react"

const faqs = [
  {
    id: "1",
    question: "How do we detect fake invoices?",
    answer: "We cross-check GST QR codes against government databases and use AI algorithms to detect duplicate invoices. Our system also analyzes invoice patterns and buyer behavior to identify potential fraud.",
    category: "Verification"
  },
  {
    id: "2", 
    question: "What is the typical financing rate?",
    answer: "Our financing rates typically range from 1.5% to 4% per transaction, depending on the MSME's credit profile, invoice value, and buyer credibility. Most transactions are processed within 24 hours.",
    category: "Financing"
  },
  {
    id: "3",
    question: "How long does the verification process take?",
    answer: "Invoice verification is typically completed within 2-5 minutes using our automated systems. Complex cases requiring manual review may take up to 2 hours during business hours.",
    category: "Verification"
  },
  {
    id: "4",
    question: "What documents are required for MSME registration?",
    answer: "MSMEs need to provide: GSTIN certificate, Bank statements (6 months), Udyog Aadhaar, PAN card, and recent invoices. Additional documents may be required based on business type.",
    category: "Registration"
  },
  {
    id: "5",
    question: "Can I track my disbursement status?",
    answer: "Yes, you can track your disbursement status in real-time through the Disbursements section. You'll receive SMS and email notifications at each stage of the process.",
    category: "Disbursements"
  },
  {
    id: "6",
    question: "What happens if an invoice is rejected?",
    answer: "If an invoice is rejected, you'll receive detailed feedback about the reasons. Common issues include GST mismatches, duplicate submissions, or incomplete documentation. You can resubmit after addressing the issues.",
    category: "Verification"
  }
]

const supportChannels = [
  {
    title: "Live Chat",
    description: "Get instant help from our support team",
    icon: MessageCircle,
    action: "Start Chat",
    availability: "24/7 Available"
  },
  {
    title: "Email Support", 
    description: "Send us your queries and we'll respond within 4 hours",
    icon: Mail,
    action: "Send Email",
    availability: "Response within 4 hours"
  },
  {
    title: "Phone Support",
    description: "Speak directly with our experts",
    icon: Phone,
    action: "Call Now",
    availability: "Mon-Fri 9 AM - 6 PM"
  }
]

export default function HelpCenter() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Help Center</h1>
          <p className="text-muted-foreground">
            Find answers to common questions and get support
          </p>
        </div>
      </div>

      {/* Support Channels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {supportChannels.map((channel) => (
          <Card key={channel.title} className="bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <channel.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{channel.title}</h3>
                  <p className="text-xs text-muted-foreground">{channel.availability}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{channel.description}</p>
              <Button variant="outline" className="w-full">
                {channel.action}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* FAQ Section */}
      <Card className="bg-gradient-card border-border/50">
        <CardHeader>
          <CardTitle className="text-foreground flex items-center gap-2">
            <HelpCircle className="h-5 w-5" />
            Frequently Asked Questions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-border/30">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-2">
                    <span className="text-foreground">{faq.question}</span>
                    <Badge variant="secondary" className="text-xs">
                      {faq.category}
                    </Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Getting Started</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-foreground">MSME Registration Guide</span>
              <Button variant="ghost" size="sm">View</Button>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-foreground">Upload Your First Invoice</span>
              <Button variant="ghost" size="sm">View</Button>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-foreground">Understanding Verification</span>
              <Button variant="ghost" size="sm">View</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Resources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-foreground">API Documentation</span>
              <Button variant="ghost" size="sm">View</Button>
            </div>
            <div className="flex justify-between items-centers">
              <span className="text-sm text-foreground">Integration Guide</span>
              <Button variant="ghost" size="sm">View</Button>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-foreground">Best Practices</span>
              <Button variant="ghost" size="sm">View</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}