import cv from "../data/cv.json";
export default function Education() {
  const { education } = cv;
  console.log(education);
  return (
    <>
      <div className="flex flex-col justify-center items-center max-w-7xl h-full gap-5">
        {education.map((edu, i) => (
          <ul
            key={i}
            className="flex flex-col justify-start items-start w-full gap-2"
          >
            <h1>{edu.degree}</h1>
            <h2>{edu.institution}</h2>
            <h3>{edu.period}</h3>
            <h4>
              {edu.details.map((detail, i) => (
                <ul key={i}>
                  <li>{detail}</li>
                </ul>
              ))}
            </h4>
          </ul>
        ))}
      </div>
    </>
  );
}
