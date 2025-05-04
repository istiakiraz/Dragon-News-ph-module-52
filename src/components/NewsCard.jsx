import React from 'react';
import { FaStar, FaEye, FaShareAlt } from 'react-icons/fa';
import moment from 'moment';
import { CiBookmark } from 'react-icons/ci';

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    image_url,
    details,
    rating,
    total_view
  } = news;

  return (
    <div className="card w-full bg-base-100  border-gray-100 border">
      {/* Card Header */}
      <div className="flex justify-between bg-gray-200 rounded-t-[9px] items-center px-4 py-4">
        <div className="flex items-center gap-3">
          <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-500">{moment(author.published_date).format('YYYY-MM-DD')}</p>
          </div>
        </div>
       <div className='flex items-center gap-2'>
       <CiBookmark size={20} className="text-gray-500 cursor-pointer" />
       <FaShareAlt className="text-gray-500 cursor-pointer" />
       </div>
      </div>

      {/* Card Body */}
      <div className="card-body pt-3">
        <h2 className="card-title text-lg font-bold">{title}</h2>
        <figure className="py-3">
          <img src={image_url} alt={title} className="w-full h-60 object-cover rounded" />
        </figure>
        <p className="text-sm text-gray-600">
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}... <span className="text-red-500 hover:underline font-semibold cursor-pointer">Read More</span>
            </>
          ) : (
            details
          )}
        </p>
      </div>

      {/* Card Footer */}
      <div className="flex justify-between items-center px-4 pb-4">
        <div className="flex items-center gap-2 text-orange-400">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < rating.number ? 'text-orange-400' : 'text-gray-300'} />
          ))}
          <span className="ml-1 font-semibold text-black">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <FaEye /> <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
