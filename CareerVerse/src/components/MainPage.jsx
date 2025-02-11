import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import JobListings from "../pages/JobListings";
import EmployerDashboard from "../pages/EmployerDashboard";
import JobSeekerDashboard from "../pages/JobSeekerDashboard";
import ApplyJob from "../pages/ApplyJob";

export default function WebPortal() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
        <nav className="w-full max-w-4xl flex justify-between p-4 bg-white shadow-lg rounded-2xl">
          <Link to="/" className="text-xl font-bold">
            JobPortal
          </Link>
          <div className="space-x-4">
            <Link to="/jobs">
              <Button variant="outline">Jobs</Button>
            </Link>
            <Link to="/employer">
              <Button variant="outline">Employer</Button>
            </Link>
            <Link to="/jobseeker">
              <Button variant="outline">Job Seeker</Button>
            </Link>
            <Link to="/about">
              <Button variant="outline">About</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline">Contact</Button>
            </Link>
          </div>
        </nav>
        <div className="w-full max-w-4xl mt-6">
          <Card>
            <CardContent className="p-6">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/jobs" element={<JobListings />} />
                <Route path="/employer" element={<EmployerDashboard />} />
                <Route path="/jobseeker" element={<JobSeekerDashboard />} />
                <Route path="/apply" element={<ApplyJob />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </CardContent>
          </Card>
        </div>
      </div>
    </Router>
  );
}
