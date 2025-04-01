
import React from 'react';
import Header from '@/components/Header';
import Dashboard from '@/components/Dashboard';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Business Dashboard</h1>
            <p className="text-gray-600 mt-2">
              Upload financial data and generate AI-powered business reports
            </p>
          </div>
          <Dashboard />
        </div>
      </main>
      <footer className="bg-white border-t border-border py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>© 2023 AI Business Report Generator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
