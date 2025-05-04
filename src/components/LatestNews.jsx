import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { useParams } from 'react-router';

const LatestNews = ({ data }) => {
  const { id } = useParams();
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    const latestNews = data.filter(
      (news) => news.others.is_today_pick === true
    );
    setLatest(latestNews);
  }, [data, id]);

  return (
    <div className="flex items-center py-3 px-3 gap-3 bg-[#F3F3F3]">
      <p className="px-4 py-2 bg-[#D72050] text-white">Latest</p>
      <Marquee pauseOnHover={true}>
        <div className="flex gap-5">
          {latest.map((news) => (
            <p key={news.id} className="font-semibold text-[#403F3F]">
              {news.title}
            </p>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default LatestNews;




