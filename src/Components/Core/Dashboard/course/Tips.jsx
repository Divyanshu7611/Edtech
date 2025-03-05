import React from "react";

const CourseUploadTips = () => {
  return (
    <div className="border-2 border-[#2C333F] p-4 rounded-lg bg-gray-900 text-white max-w-sm bg-[#161D29]">
      <h2 className="text-lg font-semibold flex items-center gap-2">
        ⚡ Course Upload Tips
      </h2>
      <ul className="list-disc list-outside mt-2 text-sm space-y-2 ml-3">
        <li>Set the Course Price option or make it free.</li>
        <li>Standard size for the course thumbnail is 1024×576.</li>
        <li>Video section controls the course overview video.</li>
        <li>Course Builder is where you create & organize a course.</li>
        <li>Add Topics in the Course Builder section to create lessons, quizzes, and assignments.</li>
        <li>Information from the Additional Data section shows up on the course single page.</li>
        <li>Make Announcements to notify any important updates.</li>
        <li>Notes to all enrolled students at once.</li>
      </ul>
    </div>
  );
};

export default CourseUploadTips;
