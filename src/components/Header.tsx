
import React from 'react';
import { FileText, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  return (
    <header className="border-b border-border bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <FileText className="h-6 w-6 text-blue-600" />
          <h1 className="text-lg font-bold">Business Report Generator</h1>
        </div>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-1">
                Templates <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Financial Summary</DropdownMenuItem>
              <DropdownMenuItem>Sales Analysis</DropdownMenuItem>
              <DropdownMenuItem>Market Trends</DropdownMenuItem>
              <DropdownMenuItem>Custom Report</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
            New Report
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
