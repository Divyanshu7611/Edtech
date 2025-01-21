import React from "react";
import HeadingText from "../Components/Core/HomePage/HeadingText";
import FoundingStory from "../assets/Images/FoundingStory.png";
import About1 from "../assets/Images/aboutus1.webp";
import About2 from "../assets/Images/aboutus2.webp";
import About3 from "../assets/Images/aboutus3.webp";
import Stats from "../Components/Core/About/Stats";
import ContactUsForm from "../Components/Core/About/ContactUsForm";

function About() {
  return (
    <div className="flex flex-col">
      <div className="bg-[#161D29] min-w-screen pb-48">
        <div className="mx-auto">
          <p className="text-[#999DAA] text-center font-medium text-lg pt-10">
            About Us
          </p>

          <div className="lg:text-4xl font-bold text-xl w-fit mt-10 text-center text-white mx-auto">
            Driving Innovation in Online Education for a<br />
            <HeadingText text={" Brighter Future"} />
          </div>
          <p className="text-[#838894] text-center font-medium text-lg pt-10 max-w-[840px] mx-auto">
            Studynotion is at the forefront of driving innovation in online
            education. We're passionate about creating a brighter future by
            offering cutting-edge courses, leveraging emerging technologies, and
            nurturing a vibrant learning community.
          </p>
        </div>
      </div>
      {/* about image */}
      <div className="absolute top-[25rem] w-full">
        <div className="max-w-[1200px] mx-auto flex gap-[24px] lg:h-[311px]">
          <img src={About1} alt="" />
          <img src={About2} alt="" />
          <img src={About3} alt="" />
        </div>
      </div>
      {/* quote Section */}
      <div className="max-w-[1200px] mx-auto mt-20">
        <h1 className="lg:text-4xl text-xl text-center font-semibold text-[#AFB2BF] max-w-[1200px] mx-auto mt-40 mb-10">
          We are passionate about revolutionizing the way we learn. Our
          innovative platform combines technology,{" "}
          <span className="gradient-text">expertise</span>, and community to
          create an{" "}
          <span className="gradient-text ">
            unparalleled educational experience
          </span>
          .
        </h1>
      </div>
      {/* founding section */}
      <div>
        <div className="mx-auto max-w-[1200px] p-16 flex justify-between">
          <div className="flex flex-col gap-2 lg:w-[486px]">
            <h1 className="gradient-text2 font-semibold text-4xl">
              Our Founding Story{" "}
            </h1>
            <div className="flex gap-2 flex-col text-[#838894] text-base font-medium">
              <p>
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
              <p>
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential.
              </p>
            </div>
          </div>
          <div>
            <img src={FoundingStory} alt="Founding Story" />
          </div>
        </div>
      </div>
      {/* our missons section */}
      <div>
        <div className="mx-auto max-w-[1200px] p-16 flex justify-between">
          <div className="flex flex-col gap-2 lg:w-[486px]">
            <h1 className="gradient-text3 font-semibold text-4xl">
              Our Vision{" "}
            </h1>
            <div className="flex gap-2 flex-col text-[#838894] text-base font-medium">
              <p>
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="flex flex-col gap-2 lg:max-w-[486px]">
            <h1 className="gradient-text4 font-semibold text-4xl">
              Our Mission
            </h1>
            <div className="flex gap-2 flex-col text-[#838894] text-base font-medium">
              <p>
                our mission goes beyond just delivering courses online. We
                wanted to create a vibrant community of learners, where
                individuals can connect, collaborate, and learn from one
                another. We believe that knowledge thrives in an environment of
                sharing and dialogue, and we foster this spirit of collaboration
                through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* stats */}
      <div className="w-full">
        <Stats />
      </div>
      <ContactUsForm />
    </div>
  );
}

export default About;
