
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Upload, Home, Palette } from "lucide-react";

const Index = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const templates = [
    {
      id: "modern",
      name: "Modern Villa",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=300&h=200&fit=crop"
    },
    {
      id: "traditional",
      name: "Traditional House",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=300&h=200&fit=crop"
    },
    {
      id: "contemporary",
      name: "Contemporary Design",
      image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=300&h=200&fit=crop"
    },
    {
      id: "cottage",
      name: "Cozy Cottage",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <header className="text-center py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <Home className="w-10 h-10 text-indigo-600" />
            <h1 className="text-5xl font-bold text-gray-800">Dream House Designer</h1>
          </div>
          <p className="text-xl text-gray-600">Design and visualize your perfect home</p>
        </motion.div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="col-span-1"
        >
          <Card className="rounded-2xl shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Upload className="w-6 h-6 text-indigo-600" />
                <h2 className="text-2xl font-semibold text-gray-800">Upload Your Design</h2>
              </div>
              <div className="border-2 border-dashed border-indigo-300 rounded-lg p-8 text-center mb-6 hover:border-indigo-400 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <Upload className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Click to upload your design</p>
                  <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                </label>
              </div>
              {selectedFile && (
                <div className="text-sm text-green-600 mb-4">
                  ✓ {selectedFile.name} uploaded successfully
                </div>
              )}
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                Process Upload
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="col-span-1"
        >
          <Card className="rounded-2xl shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Palette className="w-6 h-6 text-indigo-600" />
                <h2 className="text-2xl font-semibold text-gray-800">Choose a Template</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {templates.map((template) => (
                  <motion.div
                    key={template.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                      selectedTemplate === template.id
                        ? "border-indigo-500 shadow-lg"
                        : "border-gray-200 hover:border-indigo-300"
                    }`}
                    onClick={() => setSelectedTemplate(template.id)}
                  >
                    <img
                      src={template.image}
                      alt={template.name}
                      className="w-full h-24 object-cover"
                    />
                    <div className="p-2 bg-white">
                      <p className="text-xs font-medium text-gray-700">{template.name}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              {selectedTemplate && (
                <div className="mt-4 text-sm text-green-600">
                  ✓ {templates.find(t => t.id === selectedTemplate)?.name} selected
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="col-span-1 md:col-span-2"
        >
          <Card className="rounded-2xl shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Preview Your Design</h2>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 h-80 rounded-xl border-2 border-gray-200 flex items-center justify-center relative overflow-hidden">
                {selectedFile || selectedTemplate ? (
                  <div className="text-center">
                    <Home className="w-16 h-16 text-indigo-400 mx-auto mb-4" />
                    <p className="text-gray-600 text-lg">
                      {selectedFile ? "Processing your uploaded design..." : "Applying template..."}
                    </p>
                    <div className="mt-4 flex justify-center">
                      <div className="animate-pulse flex space-x-2">
                        <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <Home className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">Your design preview will appear here</p>
                    <p className="text-gray-400 text-sm mt-2">Upload a design or choose a template to get started</p>
                  </div>
                )}
              </div>
              <div className="mt-6 flex gap-4">
                <Button variant="outline" className="flex-1">
                  Save Design
                </Button>
                <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700">
                  Generate 3D View
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      <footer className="text-center mt-12 text-gray-500 pb-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          &copy; 2025 Dream House Designer - Transform your vision into reality
        </motion.div>
      </footer>
    </div>
  );
};

export default Index;
