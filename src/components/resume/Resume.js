import React, {  useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Achievement from './Achievement';
import Experience from "./Experience"

const Resume = () => {
   const [educationData, setEducationData] = useState(false);
   const [skillData, setSkillData] = useState(false);
   const [experienceData, setExperienceData] = useState(false);
   const [achievementData, setAchievementData] = useState(true);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="خبرة في مجالي أكثر من 14 سنة" des="السيرة الذاتية" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            <li
                 onClick={() =>
                  setEducationData(false) &
               setSkillData(false) &
                setExperienceData(false) &
                setAchievementData(true)
              }
              className={`${
                achievementData
                ? "border-designColor rounded-lg"
                : "border-transparent"
              } resumeLi`}
          >
            الإنجازات
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            المهارات 
          </li>
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            التعليم
          </li>



          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true) &
              setAchievementData(false)
            }
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            الخبرات
          </li>

        </ul>
      </div>
      {achievementData && <Achievement />}
      {skillData && <Skills />}
      {educationData && <Education />}
      {experienceData && <Experience />}
      
      
      
 
    </section>
  );
}

export default Resume