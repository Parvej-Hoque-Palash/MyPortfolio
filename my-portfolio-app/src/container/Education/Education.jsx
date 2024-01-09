import "./Education.css";

const Education = () => {
  return (
    <div className="education">
      <h1>Education</h1>
      <div className="education__page">
        <div className="show__result">
          <ul>
            <li>
              Completed Secondary School Certificate(S.S.C) exam majored in
              science from Cumilla Modern High School with GPA 5.00(Out of
              5.00).
            </li>
            <li>
              Completed Higher Secondary Certificate(H.S.C.) exam majored in
              science from Cumilla Victoria Government College with GPA 4.92(Out
              of 5.00).
            </li>
            <li>
              Completed BSc in Computer Science & Engineering from Jahangirnagar
              University with CGPA 3.55 (Out of 4.00).
            </li>
            {/* <li>
              Completed
              MSc in Computer Science & Engineering from Jahangirnagar
              University
               with CGPA 3.50 (Out of 4.00)
               .
            </li> */}
            <li>Completed a course of Frontend Development from BongoDev.</li>
            <li>Completed a MERN Stack Development Course.</li>
            <li>Completed a course on Photograpy.</li>
            <li>Working on a project named "DDoS attack detection using Machine Learning"</li>
            <li>Interested to publish a paper on BlockChain.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
