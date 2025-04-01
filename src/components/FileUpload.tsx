
import React, { useState } from 'react';
import { Upload, FileType, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      // Check if the file is CSV, Excel or JSON
      const validTypes = ['text/csv', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/json'];
      
      if (validTypes.includes(selectedFile.type)) {
        setFile(selectedFile);
        setUploadSuccess(false);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload a CSV, Excel or JSON file",
          variant: "destructive"
        });
      }
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    
    setUploading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setUploading(false);
      setUploadSuccess(true);
      toast({
        title: "Upload successful",
        description: `File ${file.name} has been uploaded`,
        variant: "default"
      });
    }, 1500);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Data Upload</CardTitle>
        <CardDescription>
          Upload your financial data in CSV, Excel or JSON format
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center gap-4 p-4 border-2 border-dashed border-gray-200 rounded-lg">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50">
            <Upload className="h-6 w-6 text-blue-600" />
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Drag and drop your files here or click to browse
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Supports CSV, Excel, and JSON formats
            </p>
          </div>
          <input
            type="file"
            id="file-upload"
            className="hidden"
            onChange={handleFileChange}
            accept=".csv,.xls,.xlsx,.json"
          />
          <label htmlFor="file-upload">
            <Button variant="outline" className="cursor-pointer" asChild>
              <span>Browse Files</span>
            </Button>
          </label>
        </div>
        
        {file && (
          <div className="mt-4">
            <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
              <FileType className="h-5 w-5 text-blue-600" />
              <span className="text-sm truncate">{file.name}</span>
              {uploadSuccess ? (
                <CheckCircle className="h-5 w-5 text-green-500 ml-auto" />
              ) : (
                <Button 
                  variant="default" 
                  size="sm" 
                  className="ml-auto bg-blue-600 hover:bg-blue-700"
                  onClick={handleUpload}
                  disabled={uploading}
                >
                  {uploading ? 'Uploading...' : 'Upload'}
                </Button>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FileUpload;
