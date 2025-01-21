import { useState, useEffect } from "react";
// import Markdown from "react-markdown";


export default function Home() {
  const roles = ["math student", "web developer", "passionate learner"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <>
      <div className="flex flex-col justify-center items-center h-full">
        <div className="description flex flex-col items-center">
          <p className="text-3xl md:text-5xl font-bold text-primary">
            Hello, I&apos;m
          </p>
          <p className="text-4xl md:text-6xl font-bold">Zhenhao Yang</p>
          <p className="text-2xl md:text-4xl font-bold text-primary capitalize">
            {roles[currentRoleIndex]}
          </p>
        </div>

        <div></div>
      </div>
    </>
  );
}
