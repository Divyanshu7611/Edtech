import React from "react";
import { useState } from "react";
import cloudImage from "../../../../assets/Dashboard/cloudImage.png"

function CreateCourseForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    tags: [],
    thumbnail: "",
    instructions: [],
    category: "",
  });
  return (
    <div className="border-[#2C333F] border w-full p-5 rounded-lg text-[#F1F2FF] bg-[#161D29]">
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="title">Course Title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter course title"
            className="w-full p-2 rounded-md border-[#65696f91] border bg-[#2C333F]"
            onChange={(e) => {
              setFormData(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description">Course Description</label>
          <textarea
            type="text"
            id="description"
            placeholder="Enter course description"
            className="w-full p-2 rounded-md border-[#65696f91] border bg-[#2C333F]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="price">Course Price</label>
          <input
            type="number"
            id="price"
            placeholder="Enter course price"
            className="w-full p-2 rounded-md border-[#65696f91] border bg-[#2C333F]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="tags">Course Tags</label>
          <input
            type="text"
            id="tags"
            placeholder="Enter course tags"
            className="w-full p-2 rounded-md border-[#65696f91] border bg-[#2C333F]"
          />
        </div>
        {/* <div className='flex flex-col gap-2'>
            <label htmlFor="thumbnail" className='relative flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-[#65696f91] bg-[#2C333F] rounded-lg cursor-pointer hover:border-yellow-400'>Course Thumbnail</label>
            <input type="file" id='thumbnail' placeholder='Enter course thumbnail' className='absolute w-full h-full opacity-0 cursor-pointer' />
            </div> */}

        <div className="flex flex-col gap-2">
            Course Thumbnail
          <label
            htmlFor="thumbnail"
            className="relative flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-[#65696f91] bg-[#2C333F] rounded-lg cursor-pointer hover:border-yellow-400"
          >
            <input
              type="file"
              id="thumbnail"
              className="absolute w-full h-full opacity-0 cursor-pointer"
            />
            <span className="bg-[#171717] border border-[#171717] rounded-full w-12 h-12 flex justify-center items-center mb-5">
                <img src={cloudImage} alt="" />
            </span>
            <span className="text-[#B0B3B8] text-sm">
              Drag and drop an image, or{" "}
              <span className="text-[#FFD60A] underline">Browse</span>
            </span>
            <p className="text-[#6C727F] text-xs">
              Max 6MB each (12MB for videos)
            </p>
            <p className="text-[#6C727F] text-xs">
              • Aspect ratio 16:9 • Recommended size 1024×576
            </p>
          </label>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="instructions">Course Instructions</label>
          <textarea
            type="text"
            id="instructions"
            placeholder="Enter course instructions"
            className="w-full p-2 rounded-md border-[#65696f91] border bg-[#2C333F]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="category">Course Category</label>
          <input
            type="text"
            id="category"
            placeholder="Enter course category"
            className="w-full p-2 rounded-md border-[#65696f91] border bg-[#2C333F]"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateCourseForm;
