
import React from 'react';
import FileUpload from './FileUpload';
import ReportGenerator from './ReportGenerator';
import DataVisualization from './DataVisualization';
import AIInsights from './AIInsights';

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FileUpload />
        <ReportGenerator />
        <DataVisualization />
        <AIInsights />
      </div>
    </div>
  );
};

export default Dashboard;
