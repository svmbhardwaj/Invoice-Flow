import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { UploadCloud, CheckCircle, XCircle, AlertTriangle, ArrowRight } from "lucide-react";
import { useToast } from "../hooks/use-toast";

type InvoiceResult = {
  status: "verified" | "fake";
  invoiceId: string;
  buyer: string;
  amount: string;
  gstMatch: boolean;
  duplicateCheck: boolean;
  message: string;
} | null;

export default function UploadPage() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [verificationResult, setVerificationResult] = useState<InvoiceResult>(null);
  const { toast } = useToast();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    setIsProcessing(true);
    setVerificationResult(null);

    // 🔮 Simulate AI OCR + Verification
    setTimeout(() => {
      const isFake = file.name.toLowerCase().includes("fake");
      const result: InvoiceResult = !isFake
        ? {
            status: "verified",
            invoiceId: "INV-12345",
            buyer: "ABC Manufacturing Ltd",
            amount: "₹1,00,000",
            gstMatch: true,
            duplicateCheck: false,
            message: "GST QR code matched successfully",
          }
        : {
            status: "fake",
            invoiceId: "INV-67890",
            buyer: "XYZ Corp Ltd",
            amount: "₹2,50,000",
            gstMatch: false,
            duplicateCheck: true,
            message: "Mismatch in GST QR code / Duplicate Invoice detected",
          };

      setVerificationResult(result);
      setIsProcessing(false);

      toast({
        title: result.status === "verified" ? "Invoice Verified ✅" : "Fraud Detected ❌",
        description: result.message,
        variant: result.status === "verified" ? "default" : "destructive",
      });
    }, 2000);
  };

  const resetDemo = () => {
    setFileName(null);
    setVerificationResult(null);
    setIsProcessing(false);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">Upload Invoice</h1>
          <p className="text-lg text-muted-foreground">
            AI-powered invoice verification (OCR + fraud detection)
          </p>
        </div>
        <Button
          onClick={resetDemo}
          variant="outline"
          className="hover:scale-105 transition-transform"
        >
          Reset Demo
        </Button>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upload Section */}
        <Card className="bg-gradient-card border-border/50 hover:shadow-lg transition-all animate-fade-in">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center gap-3 text-xl">
              <UploadCloud className="h-6 w-6 text-primary" />
              Upload Invoice
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {!fileName && !isProcessing && !verificationResult && (
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center space-y-4">
                <UploadCloud className="h-12 w-12 text-muted-foreground mx-auto" />
                <div className="space-y-1">
                  <p className="text-foreground font-medium">
                    Drag & drop your invoice here
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Supported formats: PDF, PNG, JPG
                  </p>
                </div>
                <div className="pt-4">
                  <label className="cursor-pointer bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-md shadow-md hover:opacity-90 transition">
                    Browse File
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleFileUpload}
                    />
                  </label>
                </div>
              </div>
            )}

            {isProcessing && (
              <div className="text-center py-8 space-y-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                <p className="text-foreground">Processing invoice...</p>
                <p className="text-sm text-muted-foreground">
                  Running OCR and AI fraud checks
                </p>
              </div>
            )}

            {verificationResult && (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  {verificationResult.status === "verified" ? (
                    <CheckCircle className="h-6 w-6 text-success" />
                  ) : (
                    <XCircle className="h-6 w-6 text-destructive" />
                  )}
                  <Badge
                    variant={
                      verificationResult.status === "verified"
                        ? "default"
                        : "destructive"
                    }
                    className={
                      verificationResult.status === "verified"
                        ? "bg-success/20 text-success hover:bg-success/30"
                        : "bg-destructive/20 text-destructive hover:bg-destructive/30"
                    }
                  >
                    {verificationResult.status === "verified"
                      ? "Verified"
                      : "Fake Detected"}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {verificationResult.message}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Invoice Details */}
        <Card className="bg-gradient-card border-border/50 hover:shadow-lg transition-all animate-fade-in">
          <CardHeader>
            <CardTitle className="text-foreground text-xl">
              Invoice Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {!verificationResult ? (
              <p className="text-muted-foreground text-center py-8">
                Upload an invoice to see details
              </p>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm text-muted-foreground">
                      Invoice Number
                    </Label>
                    <Input value={verificationResult.invoiceId} readOnly />
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground">Amount</Label>
                    <Input value={verificationResult.amount} readOnly />
                  </div>
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground">Buyer</Label>
                  <Input value={verificationResult.buyer} readOnly />
                </div>

                {/* Checks */}
                <div className="space-y-2">
                  <Label className="text-sm text-muted-foreground">
                    Verification Checks
                  </Label>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 rounded bg-muted/30">
                      <span className="text-sm">GST QR Code Match</span>
                      {verificationResult.gstMatch ? (
                        <CheckCircle className="h-4 w-4 text-success" />
                      ) : (
                        <XCircle className="h-4 w-4 text-destructive" />
                      )}
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-muted/30">
                      <span className="text-sm">Duplicate Check</span>
                      {!verificationResult.duplicateCheck ? (
                        <CheckCircle className="h-4 w-4 text-success" />
                      ) : (
                        <AlertTriangle className="h-4 w-4 text-destructive" />
                      )}
                    </div>
                  </div>
                </div>

                {verificationResult.status === "verified" && (
                  <div className="pt-4">
                    <Button className="w-full bg-gradient-primary hover:bg-primary-hover shadow-lg hover:shadow-xl hover:scale-105 transition-all py-3 font-semibold">
                      Proceed to Financing
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
