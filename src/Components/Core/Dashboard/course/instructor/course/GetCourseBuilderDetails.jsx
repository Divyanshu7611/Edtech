import React, { useEffect, useState } from "react";
import { getCourseDetails } from "../../../../../../services/operations/courseApi";
import { useSelector, useDispatch } from "react-redux";

function GetCourseBuilderDetails({isFetching,setIsFetching}) {
  const dispatch = useDispatch();
  const { currentCourse } = useSelector((state) => state.course);
  const [sectionDetails, setSectionDetails] = useState([]);

  console.log("the course Dtail",currentCourse)

  useEffect(() => {
    console.log("...")
    if (!currentCourse?._id) return;

    const controller = new AbortController();

    const fetchCourseDetails = async () => {
      try {
        const response = await dispatch(getCourseDetails({courseId:currentCourse._id}));
        console.log("response COmes",response[0].courseContent)

        if (response) {
          setSectionDetails(response[0].courseContent);
          setIsFetching(false)
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Error fetching course details:", error);
        }
      }
    };

    fetchCourseDetails();

    return () => controller.abort(); // Cleanup to prevent memory leaks
  },[isFetching]); // Include dependencies

  return (
    <div className="rounded-lg border border-[#424854] bg-[#2C333F] p-4">
      {sectionDetails.length > 0 ? (
        sectionDetails.map((section) => (
          <div className="flex justify-between items-center p-2 border-b border-[#424854]" key={section._id}>
            <h1 className="text-white">{section.sectionName}</h1>
            <div>
              <button className="bg-blue-500 text-white px-3 py-1 rounded">Edit</button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-400 text-center">No sections available</p>
      )}
    </div>
  );
}

export default GetCourseBuilderDetails;
