import React from "react";

export default function page() {
  return (
    <main>
      <header
        className="h-60 w-full flex items-center justify-start max-w-[75rem] mx-auto"
        // style={{
        //   background:
        //     "linear-gradient(#0000007f,#0000007f) , url('/assets/programs/codebg.jpg')",
        //   backgroundSize: "cover,cover",
        // }}
      >
        <div className="mt-5  text-start ">
          <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl raleway">
            Front End Web Development
          </h1>
        </div>
      </header>
      <main className="max-w-[75rem] mx-auto">
        <div className="flex items-center justify-start w-full my-8">
          <iframe
            src="https://www.youtube.com/embed/FOa68Hchtoc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="h-[30rem] aspect-video rounded-xl"
          ></iframe>
        </div>
        <div className="grid md:grid-cols-2">
          <div className="">
            <h1 className="text-3xl text-gray-800 font-semibold lg:text-4xl raleway">
              Course Contains
            </h1>
            <div className="mt-4">
              <h2 className="text-2xl font-semibold text-gray-800 raleway mb-4">
                Tools
              </h2>
              <ol className="list-decimal">
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
              </ol>
            </div>
          </div>
          <div className="">
            <h1 className="text-3xl text-white font-semibold lg:text-4xl raleway select-none">
              Course Contains
            </h1>
            <div className="mt-4">
              <h2 className="text-2xl font-semibold text-gray-800 raleway mb-4">
                Tools
              </h2>
              <ol className="list-decimal">
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="max-w-[75rem] mx-auto flex items-center justify-end py-8">
          <button className="btn-primary">Inquire Now</button>
        </div>
      </main>
    </main>
  );
}
