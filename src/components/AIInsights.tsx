
import React, { useState } from 'react';
import { Lightbulb, TrendingUp, TrendingDown, BarChart3, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Sample AI insights
const sampleInsights = [
  {
    id: 1,
    type: 'positive',
    icon: <TrendingUp className="h-5 w-5 text-green-500" />,
    title: 'Revenue Growth',
    description: 'Monthly revenue has increased by 15% compared to the previous quarter.',
  },
  {
    id: 2,
    type: 'negative',
    icon: <TrendingDown className="h-5 w-5 text-red-500" />,
    title: 'Cost Increase',
    description: 'Operating costs have risen by 7% due to increased material prices.',
  },
  {
    id: 3,
    type: 'neutral',
    icon: <BarChart3 className="h-5 w-5 text-blue-500" />,
    title: 'Market Share',
    description: 'Your market share remains stable at 23% with minimal fluctuations.',
  },
  {
    id: 4,
    type: 'warning',
    icon: <AlertTriangle className="h-5 w-5 text-amber-500" />,
    title: 'Inventory Alert',
    description: 'Product A inventory levels are below optimal threshold. Consider restocking.',
  },
];

const AIInsights = () => {
  const [loading, setLoading] = useState(false);
  const [insights, setInsights] = useState(sampleInsights);

  const generateInsights = () => {
    setLoading(true);
    // Simulate AI processing
    setTimeout(() => {
      // Shuffle and update insights to simulate new generation
      const shuffled = [...sampleInsights].sort(() => 0.5 - Math.random());
      setInsights(shuffled);
      setLoading(false);
    }, 2000);
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-amber-500" />
            AI-Powered Insights
          </CardTitle>
          <CardDescription>
            Automatically generated analysis based on your data
          </CardDescription>
        </div>
        <Button 
          variant="outline"
          onClick={generateInsights}
          disabled={loading}
          className="border-blue-200 text-blue-600 hover:bg-blue-50"
        >
          {loading ? 'Analyzing...' : 'Refresh Insights'}
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights.map((insight) => (
            <div 
              key={insight.id}
              className="flex items-start gap-3 p-3 rounded-lg border border-gray-100 bg-gray-50"
            >
              <div className="mt-0.5">{insight.icon}</div>
              <div>
                <h4 className="font-medium text-sm">{insight.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{insight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AIInsights;
