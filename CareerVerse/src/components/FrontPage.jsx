import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Button, Card, CardContent } from "@mui/material";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import JobListings from "./JobListings";
import EmployerDashboard from "./EmployerDashboard";
import JobSeekerDashboard from "./JobSeekerDashboard";
import ApplyJob from "./ApplyJob";

export default function FrontPage() {
  return (
    <Router>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
          padding: "16px",
        }}
      >
        <nav
          style={{
            width: "100%",
            maxWidth: "800px",
            display: "flex",
            justifyContent: "space-between",
            padding: "16px",
            backgroundColor: "white",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
            borderRadius: "16px",
          }}
        >
          <Link
            to="/"
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              textDecoration: "none",
              color: "black",
            }}
          >
            JobPortal
          </Link>
          <div style={{ display: "flex", gap: "8px" }}>
            <Link to="/jobs">
              <Button variant="outlined">Jobs</Button>
            </Link>
            <Link to="/employer">
              <Button variant="outlined">Employer</Button>
            </Link>
            <Link to="/jobseeker">
              <Button variant="outlined">Job Seeker</Button>
            </Link>
            <Link to="/about">
              <Button variant="outlined">About</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outlined">Contact</Button>
            </Link>
          </div>
        </nav>
        <div style={{ width: "100%", maxWidth: "800px", marginTop: "24px" }}>
          <Card>
            <CardContent style={{ padding: "24px" }}>
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
