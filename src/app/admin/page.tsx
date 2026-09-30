import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, AlertTriangle, TrendingUp, ShieldCheck, Activity } from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-muted/20 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 border-r bg-background p-4 flex flex-col gap-2 shadow-sm z-10">
        <div className="flex items-center gap-2 px-2 py-4 mb-4">
          <ShieldCheck className="w-6 h-6 text-primary" />
          <span className="font-semibold text-lg">Institution Admin</span>
        </div>
        <Button variant="secondary" className="justify-start">Overview</Button>
        <Button variant="ghost" className="justify-start">Aggregate Sentiment</Button>
        <Button variant="ghost" className="justify-start">Counselling Demand</Button>
        <Button variant="ghost" className="justify-start">Moderation Queue</Button>
        <Button variant="ghost" className="justify-start">Audit Logs</Button>
        
        <div className="mt-auto pt-4 border-t">
          <Button variant="ghost" className="w-full justify-start text-muted-foreground" asChild>
            <Link href="/">Back to Site</Link>
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10">
        <header className="mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">System Overview</h1>
            <p className="text-muted-foreground mt-1">Aggregate wellbeing metrics. Individual privacy preserved.</p>
          </div>
          <Button variant="outline">Export Report</Button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,248</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Sentiment Score</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-500">2.8 / 5.0</div>
              <p className="text-xs text-muted-foreground">Slight dip in Engineering Dept</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">High Risk Alerts</CardTitle>
              <AlertTriangle className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">4</div>
              <p className="text-xs text-muted-foreground">Escalated to crisis team</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Counselling Utilization</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89%</div>
              <p className="text-xs text-muted-foreground">Capacity nearly reached</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="h-96">
            <CardHeader>
              <CardTitle>Sentiment Heatmap</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center h-[calc(100%-4rem)]">
              <div className="text-muted-foreground border-2 border-dashed border-border rounded-xl p-12 text-center">
                <Activity className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p>Chart component placeholder</p>
                <p className="text-xs mt-1">Aggregated by department & week</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="h-96">
            <CardHeader>
              <CardTitle>Recent Moderation Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1,2,3].map(i => (
                  <div key={i} className="flex justify-between items-center border-b pb-4 last:border-0">
                    <div>
                      <p className="font-medium text-sm">Automated flag: Potential harassment</p>
                      <p className="text-xs text-muted-foreground">Community: Hostel Life • 2 mins ago</p>
                    </div>
                    <Button size="sm" variant="outline">Review</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
