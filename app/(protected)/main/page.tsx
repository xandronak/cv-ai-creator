"use client";

import { FileText, User, Zap } from "lucide-react";
import { useState } from "react";

import { DocumentType } from "@/common/enums";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export default function Component() {
  const [documentType, setDocumentType] = useState<DocumentType>(DocumentType.RESUME);
  const [aiSuggestion, setAiSuggestion] = useState("");

  const handleAISuggest = () => {
    // TODO: Remove Mock AI suggestion functionality
    const suggestions: Record<DocumentType, string> = {
      [DocumentType.RESUME]: "As a highly motivated software engineer with 5+ years of experience...",
      [DocumentType.COVER_LETTER]: "Dear Hiring Manager,\n\nI am writing to express my strong interest in the Software Engineer position..."
    };

    setAiSuggestion(suggestions[documentType]);
  };

  const handleTabSelect = (value: string) => {
    setDocumentType(value as DocumentType);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between px-6 py-4 bg-background border-b">
        <div className="flex items-center space-x-4">
          <FileText className="h-6 w-6"/>
          <h1 className="text-2xl font-bold">AI Resume Builder</h1>
        </div>
        <nav className="flex items-center space-x-4">
          <Button variant="ghost">Templates</Button>
          <Button variant="ghost">Pricing</Button>
          <Avatar>
            <AvatarImage src="/placeholder-avatar.jpg" alt="User"/>
            <AvatarFallback><User className="h-5 w-5"/></AvatarFallback>
          </Avatar>
        </nav>
      </header>
      <main className="flex-1 p-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <Tabs defaultValue={documentType} onValueChange={handleTabSelect}>
            <TabsList>
              <TabsTrigger value={DocumentType.RESUME}>Resume</TabsTrigger>
              <TabsTrigger value={DocumentType.COVER_LETTER}>Cover Letter</TabsTrigger>
            </TabsList>
            <TabsContent value="resume">
              <Card>
                <CardHeader>
                  <CardTitle>Create Your Resume</CardTitle>
                  <CardDescription>Let AI help you craft a professional resume.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="job-title" className="block text-sm font-medium text-gray-700">
                          Job Title
                        </label>
                        <Input id="job-title" placeholder="e.g. Software Engineer"/>
                      </div>
                      <div>
                        <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                          Years of Experience
                        </label>
                        <Select>
                          <SelectTrigger id="experience">
                            <SelectValue placeholder="Select years of experience"/>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-1">0-1 years</SelectItem>
                            <SelectItem value="1-3">1-3 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="5+">5+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
                          Key Skills
                        </label>
                        <Textarea id="skills" placeholder="Enter your key skills, separated by commas"/>
                      </div>
                      <Button onClick={handleAISuggest} className="w-full">
                        <Zap className="mr-2 h-4 w-4"/>
                        Generate AI Suggestions
                      </Button>
                    </div>
                    <div className="border rounded-lg p-4 bg-muted">
                      <h3 className="text-lg font-semibold mb-2">AI Suggestions</h3>
                      <p className="text-sm text-gray-600">{aiSuggestion || "AI suggestions will appear here..."}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="cover-letter">
              <Card>
                <CardHeader>
                  <CardTitle>Write Your Cover Letter</CardTitle>
                  <CardDescription>Craft a compelling cover letter with AI assistance.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                          Company Name
                        </label>
                        <Input id="company" placeholder="e.g. Acme Inc."/>
                      </div>
                      <div>
                        <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                          Position Applied For
                        </label>
                        <Input id="position" placeholder="e.g. Senior Software Engineer"/>
                      </div>
                      <div>
                        <label htmlFor="key-points" className="block text-sm font-medium text-gray-700">
                          Key Points to Highlight
                        </label>
                        <Textarea id="key-points" placeholder="Enter key points you want to highlight"/>
                      </div>
                      <Button onClick={handleAISuggest} className="w-full">
                        <Zap className="mr-2 h-4 w-4"/>
                        Generate AI Suggestions
                      </Button>
                    </div>
                    <div className="border rounded-lg p-4 bg-muted">
                      <h3 className="text-lg font-semibold mb-2">AI Suggestions</h3>
                      <p className="text-sm text-gray-600">{aiSuggestion || "AI suggestions will appear here..."}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          <Card>
            <CardHeader>
              <CardTitle>Choose Your Plan</CardTitle>
              <CardDescription>Select the best option for your needs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Free</CardTitle>
                    <CardDescription>Basic features with ads</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Create 1 resume and 1 cover letter</li>
                      <li>Basic AI suggestions</li>
                      <li>Limited templates</li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Start Free</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Pro</CardTitle>
                    <CardDescription>Unlimited access with subscription</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Unlimited documents</li>
                      <li>Advanced AI suggestions</li>
                      <li>All premium templates</li>
                      <li>Priority support</li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">$9.99/month</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Pay Per Document</CardTitle>
                    <CardDescription>One-time fee per document</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Full access for one document</li>
                      <li>Advanced AI suggestions</li>
                      <li>All premium templates</li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">$4.99/document</Button>
                  </CardFooter>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="py-6 text-center text-sm text-gray-500">
        © 2023 AI Resume Builder. All rights reserved.
      </footer>
    </div>
  );
}