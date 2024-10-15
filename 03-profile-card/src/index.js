import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function Avatar() {
  return <img src="my-1.png" className="avatar" />;
}
function Intro() {
  return (
    <div>
      <h1>Vanshika Saxena</h1>
      <p>
        Full-stack web development and software engineer at Persistent System
        .When not coding or developing , I like to read books and watch
        telivision or do a some workout
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((s) => (
        <Skill skillObj={s} key={s.skill} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <div className="skill">
      <p style={{ background: skillObj.color }}>
        {skillObj.skill}
        <span>{skillObj.level == "advanced" ? "💪" : null}</span>
        <span>{skillObj.level == "beginner" ? "✌️" : null}</span>
        <span>{skillObj.level == "intermediate" ? "👍" : null}</span>
      </p>
    </div>
  );
}
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
