/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

const Card = ({ isImageLeft, children }: any) => {
  return (
    // <li className="max-w-[1200px] h-full max-h-[450px] mx-auto">
    <li className="w-full ">
      <div className="relative w-full h-auto overflow-hidden">
        {children}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold text-center">
            Welcome to My Website
          </h1>
        </div>
      </div>
      <div></div>
      {/* <div
        className={`flex ${
          isImageLeft ? "flex-row" : "flex-row-reverse"
        } shadow-md rounded-lg overflow-hidden`}
      >
        <div className="w-1/2 p-6 flex flex-col justify-center">
          <h2
            className={`text-2xl font-bold mb-4 ${
              isImageLeft ? "text-right" : "text-left"
            }`}
          >
            Lorem ipsum dolor sit amet.
          </h2>
          <p
            className={`text-lg font-light text-gray-700 mb-4 ${
              isImageLeft ? "text-right" : "text-left"
            }`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
            nisl non metus fermentum varius. Curabitur vehicula felis sit amet
            sapien efficitur, at gravida elit pellentesque. Aliquam lacinia
            justo id dui fermentum, at ultricies odio efficitur. Aenean at
            libero consectetur, tempor libero at, cursus dolor. Nam auctor
            maximus nisi. Ut ut facilisis sapien. Nam et felis turpis. Curabitur
            tincidunt neque eu ante suscipit, et fermentum risus blandit.
            Phasellus eget libero et ex scelerisque venenatis.
          </p>
        </div>
        <div className="relative w-1/2 overflow-hidden   h-[450px]">
          {children}
        </div>
      </div> */}
    </li>
  )
}

export default Card
