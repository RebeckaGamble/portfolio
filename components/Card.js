import React, { useState } from "react";
import { projects } from "../data/projects";
import Link from "next/link";
import { useTheme } from "../contexts/ThemeContext";


function Card() {
  const [expanded, setExpanded] = useState([]);
  const { state } = useTheme();
  const { theme, themes } = state;
  const currentTheme = themes[theme];

  const toggleExpanded = (projectId) => {
    if (expanded.includes(projectId)) {
      setExpanded(expanded.filter((id) => id !== projectId));
    } else {
      setExpanded([...expanded, projectId]);
    }
  };

  const isExpanded = (projectId) => {
    return expanded.includes(projectId);
  };

  return (
    <>
      {projects.map((project) => (
        <div
          key={project.id}
          className={`w-full max-w-[480px] mx-auto h-[320px] justify-between flex flex-col p-4 rounded-md shadow-lg border-2 border-[#FC3A79] lg:h-[360px] lg:p-6 sm:w-[45%] ${
            isExpanded(project.id) ? "h-fit" : ""
          } ${theme === "dark" ? "bg-[rgb(34,31,31)]" : "bg-white"} 
          `}
        >
          <h2 className="font-semibold text-center py-2 text-xl lg:text-2xl">
            {project.title}
          </h2>

          <p
            className={`h-[30%] overflow-hidden ${
              isExpanded(project.id) ? "line-clamp-none" : "line-clamp-2 lg:line-clamp-3"
            }`}
          >
            {project.description}
          </p>

          {project.description.length > 120 && (
            <button
              onClick={() => toggleExpanded(project.id)}
              className="text-[#9E2DA8] underline mb-1.5"
            >
              {isExpanded(project.id) ? "Close " : "Read more"}
            </button>
          )}
          <ul className="pt-4">
            <h3 className="font-semibold text-lg ">Used tech:</h3>
            {project.tech.map((techItem, index) => (
              <li key={index} className="list-disc ml-5">
                {techItem}
              </li>
            ))}
          </ul>
          <Link href={project.url} className="underline pt-4 text-blue-500">
            Go to project
          </Link>
        </div>
      ))}
    </>
  );
}

export default Card;
