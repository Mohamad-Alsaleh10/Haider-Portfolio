import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">صحفي ميداني/مراسل حربي</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title=" تغطية أحداث الحرب و المعارك"
            subTitle=""
            result="SYR"
            des="أبرز المعارك التي تمت تغطيتها هي: معارك القصير-تدمر-السخنة-
            دير الزور"
          />
          <ResumeCard
            title=" متابعة الشأن المحلي والخدمي في سوريا"
            subTitle=""
            result="SYR"
            des=""
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
