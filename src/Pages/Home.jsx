import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import HeadingText from "../Components/Core/HomePage/HeadingText";
import ButtonComp from "../Components/Core/HomePage/ButtonComp";
import HeroVideo from "../assets/Images/banner.mp4";
import CodeBlock from "../Components/Core/HomePage/CodeBlock";
import SkillSection from "../Components/Core/HomePage/SkillSection";
import ProgressSection from "../Components/Core/HomePage/ProgressSection";
import Instructor from "../assets/Images/Instructor.png";
import Cards from "../Components/Core/HomePage/Cards";
import Footer from "../Components/global/Footer";

const Home = () => {
  return (
    <div>
      {/* Heading Seciton */}
      {/* <p className="text-xl">Hello Jee</p> */}
      <div className="text-white relative max-w-maxContent w-11/12 justify-center items-center flex flex-col mx-auto">
        <Link to="/signup">
          <div className="text-richblack-200 w-fit shadow-richblack-200 mt-16 hover:scale-95 transition-all duration-200 group rounded-full font-bold bg-richblack-800 group">
            <div className="flex justify-between rounded-full px-5 py-3 items-center group-hover:bg-richblack-900">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>
        {/* heading */}

        <div className="lg:text-4xl font-bold text-3xl w-fit mt-10">
          Empower Your Future with
          <HeadingText text={" Coding Skills"} />
        </div>
        {/* subheading */}
        <p className="text-base lg:text-center lg:w-[65%] mt-5 text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </p>
        {/* buttons component  */}
        <div className="flex gap-7 mt-10">
          <ButtonComp link={"/signup"} children={"Learn More"} active={true} />
          <ButtonComp
            Link={"/signup"}
            children={"Book a Demo"}
            active={false}
          />
        </div>
        {/* video */}
        <video
          loop
          muted
          autoPlay
          className="mt-12 lg:w-[90%] lg:h-[80%] shadow-2xl shadow-blue-200 heroVideo"
        >
          <source src={HeroVideo} type="video/mp4" />
        </video>
        <div className="mt-16 flex justify-center flex-col items-center mx-auto">
          <div className="mt-10 mx-auto">
            <CodeBlock
              button1={"Try it Yourself"}
              button2={"Learn More"}
              link1={"/signup"}
              link2={"/signup"}
              heading={
                <div className="font-semibold text-3xl">
                  Unlock your <HeadingText text={"coding potential"} /> with our
                  online courses.
                </div>
              }
              subHeading={
                "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
              }
              positions={"flex-row"}
              codeColor={"text-brown-100"}
              codeblock={`<!DOCTYPE html>
                 <html>
                 head><title>Example</
                 title><linkrel="stylesheet"href="styles.css">
                 /head>
                 body>
                 h1><ahref="/">Header</a>
                 /h1>
                 nav><ahref="one/">One</a><ahref="two/">Two</
                 a><ahref="three/">Three</a>
                 /nav>`}
            />
          </div>

          {/* cde2 */}
          <div className="mt-24 mx-auto">
            <CodeBlock
              button1={"Continue Lesson"}
              button2={"Learn More"}
              link1={"/signup"}
              link2={"/signup"}
              heading={
                <div className="font-semibold text-3xl">
                  Start <HeadingText text={`coding in seconds`} />
                </div>
              }
              subHeading={
                "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
              }
              positions={"flex-row-reverse"}
              codeColor={"text-richblack-5"}
              codeblock={`<!DOCTYPE html>
          <html>
          head><title>Example</
          title><linkrel="stylesheet"href="styles.css">
          /head>
          body>
          h1><ahref="/">Header</a>
          /h1>
          nav><ahref="one/">One</a><ahref="two/">Two</
          a><ahref="three/">Three</a>
          /nav>`}
            />
          </div>
        </div>
        {/* white box */}
        <div className="text-4xl font-bold lg:mt-48">
          Unlock the <HeadingText text={"Power of Code"} />
        </div>
        <div className="text-richblack-300">
          Learn to Build Anything You Can Imagine
        </div>
      </div>
      {/* fd */}
      <div className="max-w-maxContent w-11/12 justify-center mx-auto">
        <Cards />
      </div>
      <div className="w-full bg-[#F9F9F9]">
        <div className="bgFrame h-[310px] flex justify-center items-center">
          <div
            className="w-fit mx-auto flex gap-5
          "
          >
            <ButtonComp
              children={
                <div className="flex items-center gap-3 justify-between">
                  <p>Explore Full Catalog</p>
                  <FaArrowRight />
                </div>
              }
              active={true}
              link={"/signup"}
            />
            <ButtonComp
              children={"Learn More"}
              active={false}
              link={"/signup"}
            />
          </div>
        </div>
        {/* Skill Section */}
        <div className="lg:w-[75em] mx-auto p-5 lg:p-0">
          <SkillSection />
          <ProgressSection />
        </div>
      </div>
      {/* become a instructor section */}
      <div className="flex justify-between w-11/12 mx-auto">
        <div className="w-1/2">
          <img
            src={Instructor}
            alt=""
            className="max-h-[545px] max-w-[616px]"
          />
        </div>
        <div className="w-1/2 flex flex-col items-center">
          <div className="text-4xl font-semibold">
            Become an<br></br>
            <HeadingText text={"instructor"} />
          </div>
          <p className="font-medium text-base text-richblack-300">
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you love.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
