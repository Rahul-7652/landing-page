import React from "react";

const Card = () => {
  const cardData = [
    {
      id: 1,
      title: "Can coffee make you a better developer?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      author: "Jonathan Reinink",
      date: "Aug 18",
      image: "https://via.placeholder.com/150",
      disigination: "Software Engineer",
    },
    {
      id: 2,
      title: "How to stay productive as a developer?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      author: "Jane Doe",
      date: "Sep 12",
      image: "https://via.placeholder.com/150",
      disigination: "Software Engineer",
    },
    {
      id: 3,
      title: "Top 10 programming languages in 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      author: "John Smith",
      date: "Oct 5",
      image: "https://via.placeholder.com/150",
      disigination: "Software Engineer",
    },
    {
      id: 3,
      title: "Top 10 programming languages in 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      author: "John Smith",
      date: "Oct 5",
      image: "https://via.placeholder.com/150",
      disigination: "Software Engineer",
    },
    {
      id: 3,
      title: "Top 10 programming languages in 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      author: "John Smith",
      date: "Oct 5",
      image: "https://via.placeholder.com/150",
      disigination: "Software Engineer",
    },
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:px-5">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-white border rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500 font-semibold mb-2">
                {card.disigination}
              </p>
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                {card.title}
              </h2>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <div className="flex items-center gap-3">
                <img
                  src="https://via.placeholder.com/40"
                  alt={card.author}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-gray-800 font-medium">{card.author}</p>
                  <p className="text-sm text-gray-500">{card.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
