import React from "react";
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface KPICardProps {
  title: string
  value: string | number
  change?: string
  changeType?: 'positive' | 'negative' | 'neutral'
  icon: LucideIcon
  description?: string
  variant?: 'default' | 'success' | 'warning' | 'destructive' | 'custom'
  customClasses?: string
}

export function KPICard({ 
  title, 
  value, 
  change, 
  changeType = 'neutral',
  icon: Icon, 
  description,
  variant = 'default',
  customClasses
}: KPICardProps) {
  const getVariantClasses = () => {
    if (variant === 'custom' && customClasses) {
      return customClasses
    }
    
    switch (variant) {
      case 'success':
        return 'bg-gradient-success border-success/20'
      case 'warning':
        return 'bg-gradient-warning border-warning/20'
      case 'destructive':
        return 'bg-gradient-to-br from-destructive/10 to-destructive/5 border-destructive/20'
      default:
        return 'bg-gradient-card border-border/50'
    }
  }

  const getChangeClasses = () => {
    switch (changeType) {
      case 'positive':
        return 'text-success'
      case 'negative':
        return 'text-destructive'
      default:
        return 'text-muted-foreground'
    }
  }

  return (
    <Card className={cn(
      "transition-all hover:shadow-lg hover:scale-105 animate-fade-in group cursor-pointer", 
      getVariantClasses()
    )}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-3">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{title}</p>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-foreground group-hover:scale-105 transition-transform">{value}</h3>
              {change && (
                <p className={cn("text-sm font-medium", getChangeClasses())}>
                  {change}
                </p>
              )}
              {description && (
                <p className="text-sm text-muted-foreground">{description}</p>
              )}
            </div>
          </div>
          <div className={cn(
            "w-14 h-14 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all",
            variant === 'success' ? 'bg-gradient-success text-success-foreground' :
            variant === 'warning' ? 'bg-gradient-warning text-warning-foreground' :
            variant === 'destructive' ? 'bg-destructive/20 text-destructive' :
            'bg-gradient-primary text-primary-foreground'
          )}>
            <Icon className="h-7 w-7" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}