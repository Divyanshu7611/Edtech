"use client";

import Loader from "@/components/global/Loader";
import Navbar from "@/components/global/Navbar";
import CTA from "@/components/home/CTA";
import Faq from "@/components/home/Faq";
import Hero from "@/components/home/Hero";
import Partners from "@/components/home/Partners";
import Stats from "@/components/home/Stats";
import Benifits from "@/components/home/benifit/Benifits";
import Learn from "@/components/home/learn/Learn";
import Menotrs from "@/components/home/mentors/Mentors";
import News from "@/components/home/news/News";
import Programs from "@/components/home/program/Programs";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    import("preline");

    (function (c, l, a, r, i, t, y) {
      c[a] =
        c[a] ||
        function () {
          (c[a].q = c[a].q || []).push(arguments);
        };
      t = l.createElement(r);
      t.async = 1;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "hwk9s8407v");
  }, []);

  return (
    <>
      <Navbar />

      {!loaded && <Loader />}

      <Hero />
      <Programs />
      <Benifits />
      {/* <Menotrs /> */}
      <Partners />
      <Stats />
      <Learn />
      {/* <CTA /> */}
      <Faq />
    </>
  );
}
