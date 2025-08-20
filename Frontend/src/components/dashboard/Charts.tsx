import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Tooltip, Legend } from 'recharts'

const monthlyFinancingData = [
  { month: 'Jan', financed: 180, verified: 150, fake: 30 },
  { month: 'Feb', financed: 220, verified: 190, fake: 25 },
  { month: 'Mar', financed: 280, verified: 240, fake: 35 },
  { month: 'Apr', financed: 320, verified: 280, fake: 40 },
  { month: 'May', financed: 290, verified: 250, fake: 35 },
  { month: 'Jun', financed: 350, verified: 310, fake: 40 },
]

const verificationData = [
  { name: 'Verified', value: 79, color: 'hsl(var(--success))' },
  { name: 'Fake Detected', value: 21, color: 'hsl(var(--destructive))' },
]

const fraudAlertsData = [
  { week: 'Week 1', alerts: 12 },
  { week: 'Week 2', alerts: 18 },
  { week: 'Week 3', alerts: 15 },
  { week: 'Week 4', alerts: 25 },
]

export function MonthlyFinancingChart() {
  return (
    <Card className="bg-gradient-card border-border/50">
      <CardHeader>
        <CardTitle className="text-foreground">Monthly Financing Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyFinancingData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--popover))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }}
            />
            <Legend />
            <Bar dataKey="financed" fill="hsl(var(--primary))" name="Total Financed" />
            <Bar dataKey="verified" fill="hsl(var(--success))" name="Verified" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export function VerificationPieChart() {
  return (
    <Card className="bg-gradient-card border-border/50">
      <CardHeader>
        <CardTitle className="text-foreground">Invoice Verification Status</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={verificationData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              dataKey="value"
              label={({name, value}) => `${name}: ${value}%`}
            >
              {verificationData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export function FraudAlertsChart() {
  return (
    <Card className="bg-gradient-card border-border/50">
      <CardHeader>
        <CardTitle className="text-foreground">Weekly Fraud Alerts</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={fraudAlertsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--popover))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="alerts" 
              stroke="hsl(var(--destructive))" 
              strokeWidth={2}
              dot={{ fill: 'hsl(var(--destructive))' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}