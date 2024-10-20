import React, { useState } from "react";

export default function Questions() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    { question: "What is NOVA?", answer: "NOVA is a streaming service offering various movies and shows." },
    { question: "Where can I watch?", answer: "You can watch on any device that supports streaming." },
    { question: "What can I watch on NOVA?", answer: "NOVA offers a variety of shows and movies across genres." },
    { question: "How much does NOVA cost?", answer: "NOVA costs $19 per month." },
    { question: "How do I cancel?", answer: "You can cancel anytime by visiting your account settings." }
  ];

  return (
    <div className="bg-slate-800 py-24 sm:py-32 flex flex-col justify-around items-center ">
      <h2 className="mb-12 text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl">
        Frequently Asked Questions
      </h2>
      <ul className="flex flex-col items-center justify-center mx-auto w-full md:w-3/4">
        {faqs.map((faq, index) => (
          <li
            key={index}
            className="bg-indigo-800 hover:bg-indigo-600 mb-4 w-full md:w-3/4 p-6 cursor-pointer rounded-lg transition-all duration-300"
            onClick={() => toggleFAQ(index)}
            style={{ height: activeIndex === index ? "180px" : "100px" }}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold tracking-tight text-white">
                {faq.question}
              </h3>
              <svg
                className={`transition-transform duration-300 ${activeIndex === index ? "rotate-45" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 384 512"
                width="36"
                height="36"
                fill="#f6f5f4"
              >
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
              </svg>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="mt-4 text-white">
                {faq.answer}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
