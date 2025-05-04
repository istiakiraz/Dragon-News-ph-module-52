import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const todayNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(todayNews);
      return;
    } else {
      const filterNews = data.filter((news) => news.category_id == id);

      setCategoryNews(filterNews);
    }
  }, [data, id]);

  return <>
 <h1 className="font-semibold">Dragon News Home</h1>
 <p>Total <span className="text-red-600 font-semibold ">{categoryNews.length}</span> news Found </p>

 <div className="grid grid-cols-1 mt-12 gap-5">
    {
        categoryNews.map(news=> <NewsCard key={news.id} news={news}></NewsCard>)
    }

 </div>
  
  </>;
};

export default CategoryNews;
