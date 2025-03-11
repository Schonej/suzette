// components/VideoPromo.js
import React from "react";

const Announcement = ({
  imageUrl = "https://cache.marriott.com/is/image/marriotts7prod/mc-omadm-omadm-exterior-night01007-55932:Wide-Hor?wid=1336&fit=constrain",
}) => {
  return (
    <div className="bg-white flex flex-col md:flex-row">
      {/* Right Section: Video */}
      <div className="w-full md:w-5/12 flex justify-center py-1 px-1 md:px-4 md:py-5 lg:px-5 lg:py-7">
        <div
          className="w-full h-[450px] bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>
      {/* Left Section: Text Content */}
      <div className="p-4 md:p-5 lg:p-7 w-full md:w-7/12">
        <div className="p-4 md:p-5 lg:p-7">
          <h3 className="text-[#1e3a8a] mb-4">
            <span className="text-[#1e3a8a]">P3 2025 Fall Conference </span>
            <span className="font-raleway font-normal">
              | September 16th - September 18th, 2025
            </span>
          </h3>
          <div className="text-gray-900 leading-8">
            <p className="mb-4">
              We are thrilled to extend a warm invitation to new members eager
              to join our prestigious association! Our community is built on a
              foundation of collaboration, innovation, and excellence, and we’re
              always excited to welcome fresh faces who share our vision. If
              you’re considering becoming a part of this dynamic group, we’d
              love to tell you more about what it means to join us. Membership
              is exclusively open to banks or data centers that utilize the
              Fiserv Premier core system—a powerful platform that drives
              efficiency and growth—and have achieved an asset size exceeding $1
              billion. This ensures that our members are established,
              forward-thinking institutions ready to contribute to and benefit
              from our collective expertise.
            </p>

            <button className="cta-announcement1">Sign Up</button>
            <button className="cta-announcement2">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
