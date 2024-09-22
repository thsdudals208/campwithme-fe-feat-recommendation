// src/app/(route)/recommendation/page.jsx
"use client" // 클라이언트 컴포넌트로 지정

import React, { useState } from "react"

const categories = Array(6).fill("TEST") // "TEST" 카테고리

const Recommendation = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0) // 기본적으로 첫 번째 버튼 선택

  const handleCategoryClick = (index) => {
    setSelectedCategoryIndex(index)
  }

  return (
    <div className='p-5'>
      <div className='flex justify-between mb-4'>
        {categories.map((category, index) => (
          <div key={index} className='relative'>
            <button
              onClick={() => handleCategoryClick(index)}
              className={`cursor-pointer relative z-10 ${
                selectedCategoryIndex === index
                  ? "text-gray-800"
                  : "text-gray-400"
              }`}
            >
              {category}
            </button>
            {selectedCategoryIndex === index && (
              <div
                className='absolute left-0 right-0'
                style={{
                  top: "30px", // 버튼 아래 위치 조정
                  clipPath: "polygon(30% 100%, 0% 0%, 70% 0%, 100% 100%)",
                  backgroundColor: "gray",
                  height: "3px",
                }}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recommendation
