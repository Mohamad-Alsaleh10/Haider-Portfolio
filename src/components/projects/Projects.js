import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://back.haidarrazooq.com/api/posts')
      .then(response => {
        setData(response.data.data) // access the data property of the response
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title=""
          des="آخر الأخبار"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {data.map((post, index) => (
          <ProjectsCard
            key={index}
            title={post.title}
            des={post.body}
            src={post.images} // use the images property of the post
            facebookLink={post.link} // pass the facebookLink property of the post
          />
        ))}
      </div>
    </section>
  );
}

export default Projects