export default function ProjectCard({ project }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "8px"
      }}
    >
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
}
<div style={{
  border: "1px solid #ddd",
  padding: "15px",
  borderRadius: "10px",
  background: "#fff"
}}></div>