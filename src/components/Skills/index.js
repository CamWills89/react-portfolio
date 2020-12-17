import React from "react";

function Technologies() {
    const skills = [
      "JavaScript/jQuery",
      "HTML/CSS",
      "React.js",
      "NodeJs",
      "ExressJs",
      "MySQL",
      "NoSQL",
      "MongoDb",
      "Git/Cli",
      "Chrome Dev Tools",
      "OOP & ORM",
      "Responsive Design",
    ];
    return (
      <>
        <h2 class="heading" id="skills">
                Skills
        </h2>
            <ul>
                {skills.map(skill => (
                    <li key={skill}>
                        {skill}
                    </li>
                ))}
            </ul>
      </>
    );
}

export default Technologies;