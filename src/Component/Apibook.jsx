import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EducationNews = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  
  const API_KEY = 'cb92a8e69d8e43db998198bd04ea26db'; 
  
 
  const URL = `https://newsapi.org/v2/everything?q=books+education&sortBy=relevancy&apiKey=${API_KEY}`;

  useEffect(() => {
    const getNews = async () => {
      try {
        const res = await axios.get(URL);
        setArticles(res.data.articles);
        setLoading(false);
      } catch (err) {
        console.error("News load hote somossa hoyeche:", err);
        setLoading(false);
      }
    };
    getNews();
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 p-6">
      <header className="mb-12">
        <h1 className="text-3xl font-extrabold text-white">Book & Education <span className="text-blue-500">Insights</span></h1>
        <div className="h-1 w-20 bg-blue-500 mt-2 rounded-full"></div>
      </header>

      {loading ? (
        <div className="text-center py-20 text-xl animate-pulse">Loading News...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {articles.slice(0, 12).map((news, index) => (
            <div 
              key={index} 
              className={`p-5 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all cursor-pointer shadow-2xl
                ${index === 0 || index === 7 ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1'}`}
            >
              {news.urlToImage && (
                <img 
                  src={news.urlToImage} 
                  alt="news" 
                  className="w-full h-32 object-cover rounded-2xl mb-4" 
                />
              )}
              <span className="text-[10px] bg-blue-600/30 text-blue-400 px-2 py-1 rounded-full uppercase">
                {news.source.name}
              </span>
              <h2 className="text-lg font-bold mt-3 leading-tight line-clamp-2">{news.title}</h2>
              <p className="text-sm text-slate-400 mt-2 line-clamp-3">{news.description}</p>
              
              <a 
                href={news.url} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-block mt-4 text-blue-400 hover:underline text-sm"
              >
                বিস্তারিত পড়ুন →
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EducationNews;