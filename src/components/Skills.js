import ProgressBar from "@/components/ProgessBar";

const skills = [
  { skill: "UI/UX Design", percentage: 90 },
  { skill: "Web Design", percentage: 98 },
  { skill: "Web Development", percentage: 88 },
  { skill: "App Development", percentage: 80 },
  { skill: "IOS Development", percentage: 80 },
  { skill: "PhotoShop", percentage: 90 },
];

const Skills = () => {
  return (
    <div
      className="container mx-auto p-8 "
      style={{ backgroundColor: "#e8f1f9" }}
    >
      <div
        className="bg-blue-50 p-8 mx-20 shadow-2xl rounded-lg"
        style={{ backgroundColor: "#e8f1f9" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <ProgressBar
              key={index}
              skill={skill.skill}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;