import React from "react";
import ProfileImage from "./ProfileImage";
import AboutSection from "./AboutSection";

const Sidebar = () => (
  <aside className="sidebar">
    <ProfileImage src="/makk.png" alt="Profile picture" />
    <AboutSection />
  </aside>
);

export default Sidebar;
