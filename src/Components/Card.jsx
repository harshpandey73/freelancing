import React, { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";
import Group8301 from "../assets/Group8301.png";
import Group8303 from "../assets/Group8303.png";
import Group8302 from "../assets/Group8302.png";
import Group8304 from "../assets/Group8304.png";
import Iphones from "../assets/Iphones.png";
import iPhone from "../assets/iPhone.png";

export default function Card() {
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();

  const [viewed1, setViewed1] = useState(false);
  const [viewed2, setViewed2] = useState(false);
  const [viewed3, setViewed3] = useState(false);
  const [viewed4, setViewed4] = useState(false);

  useEffect(() => {
    if (inView1 && !viewed1) {
      setViewed1(true);
    }
    if (inView2 && !viewed2) {
      setViewed2(true);
    }
    if (inView3 && !viewed3) {
      setViewed3(true);
    }
    if (inView4 && !viewed4) {
      setViewed4(true);
    }
  }, [inView1, inView2, inView3, inView4, viewed1, viewed2, viewed3, viewed4]);

  return (
    <div className="md:max-w-[1104px] w-[95%] flex flex-col items-center justify-center gap-32">
      {/* First Card */}
      <div className="md:w-full w-[95%] flex flex-col md:flex-row sm:items-center justify-start items-start md:justify-between gap-12 mt-12">
        <div ref={ref1}>
          {viewed1 && (
            <div className="pl-2 md:px-0 flex flex-col items-start justify-start w-[95%] md:w-[544px] text-[#20294C]">
              <TypeAnimation
                sequence={["AI-Powered Knowledge Retrieval", 1000]}
                cursor={true}
                className="font-semibold text-4xl lg:text-6xl py-2 lg:py-5 leading-30 lg:leading-60 tracking-[-1.92px]"
                style={{
                  whiteSpace: "pre-line",
                  display: "block",
                  fontFamily: "Source Code Pro, monospace",
                }}
                omitDeletionAnimation={true}
              />
              <p
                data-aos="fade-up"
                data-aos-delay={viewed1 ? 1000 : 0}
                data-aos-once="true"
                className="py-2 px-2 lg:py-5 font-regular text-xl lg:text-2xl leading-9 md:text-left font-inter"
              >
                Nikaru harnesses the power of AI to decode handwritten notes,
                decipher complex passages, and provide instant answers.
              </p>
            </div>
          )}
        </div>
        {inView1 && (
          <div className="w-[500px] relative ml-4 border">
            <div className="absolute left-0 bottom-[-100px] animation-right-to-left">
              <img src={Group8301} alt="Group" className="w-[450px]" />
            </div>
            <div className="absolute left-[250px] top-[-250px] animation-bottom-to-top">
              <img src={Iphones} alt="iPhones" className="w-[250px] z-[100]" />
            </div>
          </div>
        )}
      </div>

      {/* Second Card */}
      <div className="flex flex-col md:flex-row-reverse sm:items-center justify-center md:justify-between w-[95%] gap-12">
        <div ref={ref2}>
          {viewed2 && (
            <div
              ref={ref2}
              className="pl-4 md:px-0 flex flex-col md:w-[544px] text-[#20294C]"
            >
              <TypeAnimation
                sequence={["Global Reach,Local Understanding", 1000]}
                cursor={true}
                className="font-semibold text-4xl lg:text-6xl py-2 lg:py-5 leading-30 lg:leading-60 tracking-[-1.92px]"
                style={{
                  whiteSpace: "pre-line",
                  display: "block",
                  fontFamily: "Source Code Pro, monospace",
                }}
                omitDeletionAnimation={true}
              />
              <p
                data-aos="fade-up"
                data-aos-delay={viewed2 ? 1000 : 0}
                data-aos-once="true"
                className="py-2 lg:py-5 font-regular text-xl lg:text-2xl leading-9 text-left font-inter"
              >
                Nikaru breaks language barriers with its multilingual support,
                ensuring that users can access answers and insights in their
                preferred language, regardless of location or linguistic
                background.
              </p>
            </div>
          )}
        </div>
        {inView2 && (
          <div className="w-[500px] relative ml-4 border">
            <div className="absolute left-0 bottom-[-100px] animation-left-to-right">
              <img src={Group8304} alt="Group" className="w-[450px]" />
            </div>
            <div className="absolute left-[200px] top-[-250px] animation-bottom-to-top">
              <img src={Iphones} alt="iPhones" className="w-[250px] z-[100]" />
            </div>
          </div>
        )}
      </div>

      {/* Third Card */}
      <div className="flex flex-col md:flex-row sm:items-center justify-center md:justify-between w-[95%] gap-16">
        <div ref={ref3}>
          {viewed3 && (
            <div className="pl-4 md:px-0 flex flex-col md:w-[544px] text-[#20294C]">
              <TypeAnimation
                sequence={["Real-Time Insights", 1000]}
                cursor={true}
                className="font-semibold text-4xl lg:text-6xl py-2 lg:py-5 leading-30 lg:leading-60 tracking-[-1.92px]"
                style={{
                  whiteSpace: "pre-line",
                  display: "block",
                  fontFamily: "Source Code Pro, monospace",
                }}
                omitDeletionAnimation={true}
              />
              <p
                data-aos="fade-up"
                data-aos-delay={viewed3 ? 1000 : 0}
                data-aos-once="true"
                className="py-2 md:py-5 font-regular text-xl lg:text-2xl leading-9 text-left font-inter"
              >
                Stay current with Nikaru, offering instant access to the latest
                knowledge from across the web, ensuring you're always
                up-to-date.
                {/* <span className='text-xs'> friend you never had.</span> */}
              </p>
            </div>
          )}
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="px-4"
        >
          <img src={Group8303} alt="image-3" className="w-[557px]" />
        </div>
      </div>

      {/* Fourth Card */}
      <div className="flex flex-col md:flex-row-reverse sm:items-center justify-center md:justify-between w-[95%] relative gap-20 mb-16">
        <div ref={ref4} className="flex-grow md:w-[544px] pl-4 md:px-0 text-[#20294C] mt-[-100px] ml-4">
          {viewed4 && (
            <div>
              <TypeAnimation
                sequence={["Engage and Explore", 1000]}
                cursor={true}
                className="font-semibold text-4xl lg:text-6xl py-2 lg:py-5 leading-30 lg:leading-60 tracking-[-1.92px]"
                style={{
                  whiteSpace: "pre-line",
                  display: "block",
                  fontFamily: "Source Code Pro, monospace",
                }}
                omitDeletionAnimation={true}
              />
              <p
                data-aos="fade-up"
                data-aos-delay={viewed4 ? 1000 : 0}
                data-aos-once="true"
                className="font-inter py-2 lg:py-5 font-regular text-xl lg:text-2xl leading-9 text-left"
              >
                Dive deeper into topics with Nikaru's discussion feature,
                allowing users to interact and explore generated responses
                further, fostering collaboration and deeper understanding.
              </p>
            </div>
          )}
        </div>
        {inView4 && (
          <div className="w-[500px] relative ml-4 border">
            <div className="absolute left-0 bottom-[-100px] animation-left-to-right">
              <img src={Group8302} alt="Group" className="w-[450px]" />
            </div>
            <div className="absolute left-[150px] xl:left-[200px] top-[-200px] xl:top-[-250px] animation-bottom-to-top">
              <img src={iPhone} alt="iPhones" className="w-[250px] xl:w-[250px] z-[100]" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
