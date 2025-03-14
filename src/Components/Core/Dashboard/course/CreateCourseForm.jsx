import React from "react";
import { useState } from "react";
import cloudImage from "../../../../assets/Dashboard/cloudImage.png";
import { useDispatch, useSelector } from "react-redux";
import { createCourse } from "../../../../services/operations/courseApi";

function CreateCourseForm() {
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    courseName: "",
    courseDescription: "",
    price: "",
    tag: [],
    thumbnailImage: "",
    instructions: [],
    whatYouWillLearn: "",
    category: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "tag" ? value.split(",") : value,
    }));
  };

  const [newInstructions, setNewInstructions] = useState("");
  const handleAddInstructions = () => {
    if (newInstructions.trim() === "") return;
    if (newInstructions.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        instructions: [...prevData.instructions, newInstructions],
      }));
      setNewInstructions("");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        thumbnailImage: file,
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("courseName", formData.courseName);
    formDataToSend.append("courseDescription", formData.courseDescription);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("tag", JSON.stringify(formData.tag.join(",")));
    formDataToSend.append("thumbnailImage", formData.thumbnailImage);
    formDataToSend.append(
      "instructions",
      JSON.stringify(formData.instructions)
    );
    formDataToSend.append("whatYouWillLearn", formData.whatYouWillLearn);
    formDataToSend.append("category", formData.category);
    try {
      await dispatch(createCourse(formDataToSend, token));
    } catch (error) {
      console.error("Error creating course:", error);
    }
    setLoading(false);
  };

  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  console.log("Comes Categories are", categories);
  return (
    <div className="border-[#2C333F] border w-full p-5 rounded-lg text-[#F1F2FF] bg-[#161D29] mt-5">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="courseName">Course Title</label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={formData.courseName}
            placeholder="Enter course title"
            className="w-full p-2 rounded-md border-[#65696f91] border bg-[#2C333F]"
            onChange={handleOnChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="courseDescription">Course Description</label>
          <textarea
            type="text"
            name="courseDescription"
            value={formData.courseDescription}
            onChange={handleOnChange}
            id="courseDescription"
            placeholder="Enter course description"
            className="w-full p-2 rounded-md border-[#65696f91] border bg-[#2C333F]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="price">Course Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleOnChange}
            placeholder="Enter course price"
            className="w-full p-2 rounded-md border-[#65696f91] border bg-[#2C333F]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="category">Course Category</label>
          {categories.length > 0 ? (
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleOnChange}
              className="w-full p-2 rounded-md border-[#65696f91] border bg-[#2C333F]"
            >
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          ) : null}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="tags">Course Tags</label>
          <input
            type="text"
            name="tag"
            value={formData.tag}
            onChange={handleOnChange}
            id="tag"
            placeholder="Enter course tags"
            className="w-full p-2 rounded-md border-[#65696f91] border bg-[#2C333F]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="whatYouWillLearn">What You Will Learn</label>
          <input
            type="text"
            name="whatYouWillLearn"
            value={formData.whatYouWillLearn}
            onChange={handleOnChange}
            id="whatYouWillLearn"
            placeholder="What You Will be Learn"
            className="w-full p-2 rounded-md border-[#65696f91] border bg-[#2C333F]"
          />
        </div>

        <div className="flex flex-col gap-2">
          Course Thumbnail
          <label
            htmlFor="thumbnailImage"
            className="relative flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-[#65696f91] bg-[#2C333F] rounded-lg cursor-pointer hover:border-yellow-400"
          >
            <input
              type="file"
              id="thumbnailImage"
              name="thumbnailImage"
              onChange={handleFileChange}
              accept="image/*"
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
            name="instructions"
            value={newInstructions}
            onChange={(e) => setNewInstructions(e.target.value)}
            placeholder="Enter course instructions"
            className="w-full p-2 rounded-md border-[#65696f91] border bg-[#2C333F]"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              handleAddInstructions();
            }}
            className="text-yellow-50 border rounded-lg w-fit px-4 py-1 hover:text-white font-semibold text-sm"
          >
            Add
          </button>
          {formData.instructions.length > 0 && (
            <ul className="list-disc pl-5 text-sm text-gray-300">
              {formData.instructions.map((inst, index) => (
                <li key={index}>{inst}</li>
              ))}
            </ul>
          )}
        </div>
        <button
          type="submit"
          className="bg-[#FFD60A] text-[#1E293B] rounded-lg w-1/4 mx-auto py-2 flex justify-center items-center"
        >
          {loading ? <span className="form-loader"></span> : "Next"}
        </button>
      </form>
    </div>
  );
}

export default CreateCourseForm;
