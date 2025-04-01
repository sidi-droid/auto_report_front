
import React, { useState } from 'react';
import { FilePlus, Download, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

const ReportGenerator = () => {
  const [reportType, setReportType] = useState('financial');
  const [timeframe, setTimeframe] = useState('monthly');
  const [generating, setGenerating] = useState(false);
  const [reportGenerated, setReportGenerated] = useState(false);
  const { toast } = useToast();

  const handleGenerateReport = () => {
    setGenerating(true);
    setReportGenerated(false);
    
    // Simulate report generation
    setTimeout(() => {
      setGenerating(false);
      setReportGenerated(true);
      toast({
        title: "Report Generated Successfully",
        description: `Your ${reportType} report is ready for download`,
        variant: "default"
      });
    }, 2000);
  };

  const handleDownload = () => {
    toast({
      title: "Report Downloaded",
      description: "Your report has been downloaded successfully",
      variant: "default"
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FilePlus className="h-5 w-5 text-blue-600" />
          Report Generator
        </CardTitle>
        <CardDescription>
          Generate customized business reports from your data
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="report-type" className="text-sm font-medium">
                Report Type
              </label>
              <Select
                value={reportType}
                onValueChange={setReportType}
              >
                <SelectTrigger id="report-type">
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="financial">Financial Summary</SelectItem>
                  <SelectItem value="sales">Sales Analysis</SelectItem>
                  <SelectItem value="inventory">Inventory Report</SelectItem>
                  <SelectItem value="performance">Performance Metrics</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label htmlFor="timeframe" className="text-sm font-medium">
                Timeframe
              </label>
              <Select
                value={timeframe}
                onValueChange={setTimeframe}
              >
                <SelectTrigger id="timeframe">
                  <SelectValue placeholder="Select timeframe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="quarterly">Quarterly</SelectItem>
                  <SelectItem value="yearly">Yearly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 pt-2">
            <Button
              variant="default"
              className="bg-blue-600 hover:bg-blue-700"
              onClick={handleGenerateReport}
              disabled={generating}
            >
              {generating ? 'Generating...' : 'Generate Report'}
            </Button>
            
            {reportGenerated && (
              <Button
                variant="outline"
                className="flex items-center gap-2 border-green-200 text-green-600 hover:bg-green-50"
                onClick={handleDownload}
              >
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
            )}
          </div>
          
          {reportGenerated && (
            <div className="mt-2 p-3 bg-green-50 border border-green-100 rounded-md flex items-center gap-2 text-green-700 text-sm">
              <Check className="h-5 w-5" />
              Report generated successfully! You can now download it as PDF.
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ReportGenerator;
