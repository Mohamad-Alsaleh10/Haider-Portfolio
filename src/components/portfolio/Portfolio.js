import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Title from '../layouts/Title'
// import {portfolioone,portfoliotwo,portfoliothree } from "../../assets/index";
import PortfolioCard from './PortfolioCard';

const Portfolio = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://back.haidarrazooq.com/api/portfolios')
      .then(response => {
        setData(response.data.data) // access the data property of the response
      })
      .catch(error => console.error(error));
  }, []);
  return (
    <section
      id="Portfolio"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="يمكنك الاطلاع على أبرز النشاطات "
          des=" معرض الأعمال"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {data.map((post, index) => (
          <PortfolioCard
            key={index}
            title={post.title}
            des={post.body}
            src={post.images} // use the images property of the post
          />
        ))}
      </div>

    </section>
  );
}

export default Portfolio