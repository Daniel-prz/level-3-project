"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

export default function LocalNews() {
  const [news, setnews] = useState([]);
  const [isLoading, setLoading] = useState(null);
  useEffect(() => {
    async function fetchNews() {
      try {
        const url = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=9&apikey=${process.env.NEXT_PUBLIC_API_KEY}`;
        const response = await axios.get(
          process.env.NEXT_PUBLIC_DEV ? "/data.json" : url
        );
        setnews(response.data.articles);
        console.log(response.data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error getting news", error);
        setLoading(false); // Set loading to false if there is an error
      }
    }
    fetchNews();
  }, []);
  return (
    <section className="pb-40 bg-slate-700">
      <h2 className="text-center mb-14 pt-10 text-xl"> Check Latest News!</h2>
      {!isLoading ? (
        <div className="flex gap-5 flex-wrap justify-center">
          {news.map((item, index) => (
            <NewsCard key={index} article={item} />
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </section>
  );
}
