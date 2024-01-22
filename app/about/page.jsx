import Navbar2 from "@/components/global/Navbar2";
import React from "react";

export const metadata = {
  title: "Level-up || About",
};
export default function page() {
  return (
    <div className="">
      <Navbar2 />
      <div className="max-w-[75rem] w-full mx-auto">
        <div className="min-h-[90vh] flex items-center justify-center flex-col">
          <h1 className="heading pinkline">About Us</h1>
          <div className="flex md:flex-row-reverse gap-16 items-center justify-center  ">
            {/* <img
              src="/assets/images/hardik.jpg"
              alt=""
              className="max-w-lg rounded-md shadow-2xl aspect-square object-cover"
            /> */}
            <p className="text-gray-700 flex flex-col gap-4 tracking-wider text-justify">
              <p>
                India produces a whopping 15 lakh engineers every single year.
                And yet, only 3% of these engineers actually get high-quality
                technical jobs. There clearly is a problem. The gap between the
                number of engineers passing out and the number of jobs they
                actually get is ever-widening.
              </p>
              <p>
                Several Indian colleges and universities are still playing catch
                with the needs and requirements of the market today. And this
                problem simply grows in Tier II and III cities of India. It was
                something our founder Hardik Sambhwani faced himself.
              </p>
              <p>
                An engineering graduate, Hardik felt his love for coding was the
                one thing that kept things moving and going and made life
                simpler. He through his own understanding realised technology is
                evolving so fast that colleges cannot keep up with the latest
                trends and innovations.
              </p>
              <p>
                Digging deeper into the existing market conditions he realised
                most students have the option of free online videos or online
                courses. The problem with online videos is that they aren’t
                well-structured or curated. And while online courses solve the
                problem, they have low completion rates, which is at around 6%.
              </p>
              <p>
                They do have the ability to give live feedback or address
                questions. It was to solve for this problem that Hardik founded
                LevelUp. LevelUp is building offline centres (hubs) to upskill
                students and help them build their dream careers.
              </p>
            </p>
          </div>
        </div>
        <div className="py-12">
          <h1 className="heading">Why Choose Level up</h1>
          <div className="flex md:flex-row gap-16 items-center justify-center">
            {/* <img
              src="/assets/images/center.jpg"
              alt=""
              className="max-w-lg rounded-md shadow-2xl aspect-square object-cover"
            /> */}
            <p className="text-gray-700 flex flex-col gap-4 tracking-wider">
              <p>
                LevelUp has built a modern world-class infrastructure for
                experiential learning. It brings together all the top course
                creators under one roof and helps students learn from industry
                experts.
              </p>
              <p>
                It provides hands-on practical experience that makes students
                skill worthy. LevelUp also offers placement support and career
                guidance. It empowers students to build projects and start real
                businesses, not just assignments or coursework. It is the
                gateway to the future of learning.
              </p>
              <p>
                Level up is for all those extraordinary students:
                <ul className="list-disc ml-8">
                  <li className="">
                    Who has passed class 12th and wants to learn
                    industry-relevant skills
                  </li>
                  <li>
                    Who are willing to accelerate in life and do not want to
                    waste 3-4 years into formal education
                  </li>
                </ul>
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
