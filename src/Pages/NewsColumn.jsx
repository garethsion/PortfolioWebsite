// NewsColumn.jsx
import React from "react";

const NewsColumn = ({ news }) => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">News</h2>
      <div className="space-y-4 max-w-2xl mx-auto">
        {news.map((item, idx) => (
          <div
            key={idx}
            className="p-4 bg-white rounded-2xl shadow-md border hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.date}</p>
            <p className="mt-2 text-gray-700">{item.description}</p>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-blue-600 hover:underline"
              >
                Read more →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsColumn;
