// components/VideoPromo.js
import React from "react";

const VideoPromo = () => {
  return (
    <div className="bg-[#eeeeee] flex flex-col md:flex-row">
      {/* Left Section: Text Content */}
      <div className="p-4 md:p-5 lg:p-7 w-full md:w-7/12">
        <div className="p-4 md:p-5 lg:p-7">
          <h3 className="text-[#1e3a8a] mb-4">
            <span className="text-[#1e3a8a]">Prominent Premier Partners </span>
            <span className="font-raleway font-normal">
              | Our most recent conference
            </span>
          </h3>
          <div className="text-gray-900 leading-8">
            <p>
              P3 proudly unites nearly 100 banks and data centers spanning the
              nation, each boasting assets surpassing the $1 billion mark. Our
              mission? To ignite collaboration and spark innovation by creating
              a vibrant hub for sharing insights, strategies, and expertise—all
              aimed at unlocking the full potential of Fiserv Premier products
              and services. As esteemed Fiserv clients, P3 members enjoy
              privileged access to Fiserv’s top-tier executives, fostering
              direct, impactful connections with the industry’s decision-makers.
              Dreaming of swapping ideas with peers in non-competing markets,
              tackling a tricky Fiserv Premier challenge, or delivering your
              input straight to the folks who shape the software? P3 is the
              ultimate community for your organization to thrive and make waves.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section: Video */}
      <div className="w-full md:w-5/12 flex justify-center py-1 px-1 md:px-4 md:py-5 lg:px-5 lg:py-7">
        <iframe
          title="video"
          className="w-full max-w-[700px] h-[403px] py-1 px-1 md:px-4 md:py-5 lg:px-3 lg:py-5 xl:px-5"
          src="https://www.youtube.com/embed/Rr8C3hpwOrM?si=ykOhGHOrLw5H1Z_z"
          frameBorder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPromo;
