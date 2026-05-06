import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const initialProjects = [
  { id: 1, title: "Brand Identity", description: "Logo design project" },
  { id: 2, title: "E-commerce Site", description: "React shopping app" },
  { id: 3, title: "Mobile UI", description: "App interface design" }
];

export default function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Project Showcase</h1>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <ProjectForm projects={projects} setProjects={setProjects} />

      <ProjectList projects={projects} searchTerm={searchTerm} />
    </div>
  );
}
<div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}></div>