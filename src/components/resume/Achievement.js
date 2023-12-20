import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">التكريمات</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="  تكريم من رئيس الجمهورية"
            subTitle="2012"
            result="SYR"
            des=""
          />
          <ResumeCard
            title="  تكريم من وزارة الإعلام"
            subTitle="2019"
            result="SYR"
            des=""
          />
          <ResumeCard
            title="  وسام من روسيا "
            subTitle="2017 "
            result="SYR"
            des=""
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold"></h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="  حائز على تكريم من محافظ حمص"
            subTitle="2012 - 2015"
            result="SYR"
            des=""
          />
          <ResumeCard
            title="تكريم من اتحاد الإعلاميين العرب
            في الولايات المتحدة عام "
            subTitle="2015"
            result="SYR"
            des=""
          />
          <ResumeCard
            title="حائز على وسام من وزارة الإعلام السورية"
            subTitle="2012"
            result="SYR"
            des=""
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
