
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart, Building, Briefcase, Clipboard, ChevronRight } from "lucide-react";

export function CareerMentor() {
  return (
    <div className="container py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold">AI Career Mentor</h2>
        <p className="mt-4 text-muted-foreground">
          Get personalized career guidance, job market analysis, and skill-building recommendations.
        </p>
      </div>

      <Tabs defaultValue="guidance" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="guidance">Career Guidance</TabsTrigger>
            <TabsTrigger value="market">Job Market</TabsTrigger>
            <TabsTrigger value="skills">Skill Analysis</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="guidance">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-unisphere-teal-100">
                  <Briefcase className="h-5 w-5 text-unisphere-teal-600" />
                </div>
                <CardTitle>Career Pathways</CardTitle>
                <CardDescription>
                  Explore potential career paths based on your academic background, interests, and strengths.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Data Scientist</p>
                        <p className="text-sm text-muted-foreground">Based on your interest in statistics and programming</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">UX Researcher</p>
                        <p className="text-sm text-muted-foreground">Based on your psychology coursework and design skills</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Product Manager</p>
                        <p className="text-sm text-muted-foreground">Leveraging your business and technical knowledge</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-unisphere-orange-100">
                  <Clipboard className="h-5 w-5 text-unisphere-orange-600" />
                </div>
                <CardTitle>Personalized Action Plan</CardTitle>
                <CardDescription>
                  Step-by-step guidance to help you achieve your career goals.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-3">
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-background">
                        <span className="text-sm font-medium">1</span>
                      </div>
                      <div>
                        <p className="font-medium">Complete Python for Data Science course</p>
                        <p className="text-sm text-muted-foreground">Strengthen your programming foundations</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-background">
                        <span className="text-sm font-medium">2</span>
                      </div>
                      <div>
                        <p className="font-medium">Build a portfolio project</p>
                        <p className="text-sm text-muted-foreground">Apply skills to a real-world data analysis project</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-background">
                        <span className="text-sm font-medium">3</span>
                      </div>
                      <div>
                        <p className="font-medium">Network with industry professionals</p>
                        <p className="text-sm text-muted-foreground">Join data science meetups and online communities</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="market">
          <Card>
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-unisphere-blue-100">
                <BarChart className="h-5 w-5 text-unisphere-blue-600" />
              </div>
              <CardTitle>Job Market Insights</CardTitle>
              <CardDescription>
                Analyze current job market trends and opportunities for your field of interest.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Top Growing Fields</h3>
                  <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
                    <div className="rounded-lg border p-4">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-medium">Data Science</p>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">+24%</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">High demand for AI/ML specialists and data engineers</p>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-medium">Cybersecurity</p>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">+18%</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Growing need for security analysts and engineers</p>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-medium">Cloud Computing</p>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">+15%</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Increased demand for AWS and Azure specialists</p>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-medium">UX/UI Design</p>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">+12%</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Companies focusing on user experience improvement</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Recommended Job Boards</h3>
                  <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
                    <Button variant="outline" className="h-auto flex-col py-4">
                      <Building className="h-8 w-8 mb-2" />
                      <span>LinkedIn</span>
                    </Button>
                    <Button variant="outline" className="h-auto flex-col py-4">
                      <Building className="h-8 w-8 mb-2" />
                      <span>Indeed</span>
                    </Button>
                    <Button variant="outline" className="h-auto flex-col py-4">
                      <Building className="h-8 w-8 mb-2" />
                      <span>Glassdoor</span>
                    </Button>
                    <Button variant="outline" className="h-auto flex-col py-4">
                      <Building className="h-8 w-8 mb-2" />
                      <span>AngelList</span>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Your Skill Profile</CardTitle>
                <CardDescription>
                  Analysis of your current skills and competencies.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <p className="text-sm font-medium">Programming</p>
                      <p className="text-sm text-muted-foreground">Advanced</p>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div className="h-full w-[85%] rounded-full bg-unisphere-blue-600"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <p className="text-sm font-medium">Data Analysis</p>
                      <p className="text-sm text-muted-foreground">Intermediate</p>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div className="h-full w-[65%] rounded-full bg-unisphere-blue-600"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <p className="text-sm font-medium">Project Management</p>
                      <p className="text-sm text-muted-foreground">Beginner</p>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div className="h-full w-[35%] rounded-full bg-unisphere-blue-600"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <p className="text-sm font-medium">Communication</p>
                      <p className="text-sm text-muted-foreground">Advanced</p>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div className="h-full w-[80%] rounded-full bg-unisphere-blue-600"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Skill Development Recommendations</CardTitle>
                <CardDescription>
                  Based on your target career paths and current skill level.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Badge className="px-2 py-1 mt-0.5">High Priority</Badge>
                    <div>
                      <p className="font-medium">Machine Learning</p>
                      <p className="text-sm text-muted-foreground">Essential for data science roles</p>
                      <Button variant="link" className="h-8 px-0">Recommended courses →</Button>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Badge className="px-2 py-1 mt-0.5">High Priority</Badge>
                    <div>
                      <p className="font-medium">SQL & Database Management</p>
                      <p className="text-sm text-muted-foreground">Required for data analytics positions</p>
                      <Button variant="link" className="h-8 px-0">Recommended courses →</Button>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Badge variant="outline" className="px-2 py-1 mt-0.5">Medium Priority</Badge>
                    <div>
                      <p className="font-medium">Cloud Computing</p>
                      <p className="text-sm text-muted-foreground">AWS or Azure certification would be valuable</p>
                      <Button variant="link" className="h-8 px-0">Recommended courses →</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
