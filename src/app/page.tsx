"use client"

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";


const Login = dynamic(() => import("./login/page"), { ssr: false });

export default function Home() {
  // State to track whether the user has already visited
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    // Check local storage for a flag indicating the user has visited
    const hasVisitedBefore = localStorage.getItem("visitedBefore");

    // If the flag is not set, it's the user's first visit
    if (!hasVisitedBefore) {
      // Set the flag in local storage
      localStorage.setItem("visitedBefore", "true");

      // Update the state to indicate that the user has visited
      setHasVisited(true);
    }
  }, []);

  return (
    <>
      {/* Display the login page only if it's the user's first visit */}
      {hasVisited ? null : <Login/>}


      
    </>
  );
}
