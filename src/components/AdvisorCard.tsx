import React from "react";
import { useNavigate } from "react-router-dom";

interface AdvisorCardProps {
  name: string;
  title: string;
  image: string;
  summary: string;
  link: string;
}

const AdvisorCard: React.FC<AdvisorCardProps> = ({
  name,
  title,
  image,
  summary,
  link,
}) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate(link);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition w-full h-full flex flex-col">
      {/* Rectangular Image */}
      <div className="w-full h-96 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h2 className="text-xl font-bold text-orange-600 mb-1">{name}</h2>
        <p className="text-sm text-gray-600 mb-2">{title}</p>
        <p className="text-gray-700 text-sm mb-4 flex-1 line-clamp-4">{summary}</p>

        <button
          onClick={handleLearnMore}
          className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-500 transition-colors mt-auto"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default AdvisorCard;
