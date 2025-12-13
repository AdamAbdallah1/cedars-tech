import React from 'react'


const Item = ({ title, imgUrl, imgWidth }) => {
  return (
    <div className={`gap-8 mt-10 w-full max-w-6xl px-4 flex justify-center items-center flex-row`}>
        <div className={`h-30 w-30 flex flex-col justify-center items-center p-4 rounded-lg shadow hover:shadow-lg border-4 border-neutral-800`}>
          <div className="flex flex-row items-center justify-center mb-4">
            <img width={imgWidth} src={imgUrl} alt={title} />
          </div>
        </div>
    </div>
  )
}

export default Item