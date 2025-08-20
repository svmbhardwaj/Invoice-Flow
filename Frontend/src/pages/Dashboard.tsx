import React from "react"
import { FileText, ShieldCheck, AlertTriangle, DollarSign } from "lucide-react"

import { KPICard } from "../components/dashboard/KPICard"
import { MonthlyFinancingChart, VerificationPieChart, FraudAlertsChart } from "../components/dashboard/Charts"
import { MSMETable } from "../components/dashboard/MSMETable"

export default function Dashboard() {
  return (
    <div className="space-y-10 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground text-sm">
            Quick overview of invoices, verifications, and financing
          </p>
        </div>
      </div>

      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <KPICard
          title="Total Invoices"
          value="120"
          change="+12% from last month"
          changeType="positive"
          icon={FileText}
          description="Uploaded this month"
        />
        <KPICard
          title="Verified"
          value="95"
          change="+8% from last month"
          changeType="positive"
          icon={ShieldCheck}
          description="Successfully verified"
          variant="custom"
          customClasses="bg-gray-800 text-gray-200 border border-gray-700"
        />

        <KPICard
          title="Fraud Detected"
          value="25"
          change="+3 from last month"
          changeType="negative"
          icon={AlertTriangle}
          description="Fake invoices caught"
          variant="custom"
          customClasses="bg-rose-50 text-rose-700 border border-rose-200 dark:bg-rose-900/20 dark:text-rose-300 dark:border-rose-800"
        />
        <KPICard
          title="Cash Disbursed"
          value="₹2.4Cr"
          change="+15% from last month"
          changeType="positive"
          icon={DollarSign}
          description="Financing provided"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        <div className="xl:col-span-2">
          <MonthlyFinancingChart />
        </div>
        <div>
          <VerificationPieChart />
        </div>
      </div>

      {/* MSMEs + Fraud Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <MSMETable />
        </div>
        <div>
          <FraudAlertsChart />
        </div>
      </div>
    </div>
  )
}
