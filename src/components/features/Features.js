import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="ماذا أفعل ؟" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Business Stratagy"
          des=""
         
        />
        <Card
          title="App Development"
          des=""
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimisation"
          des=""
          icon={<SiProgress />}
        />
        <Card
          title="Mobile Development"
          des=""
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des=""
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des=""
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features