import React from "react";
import Image from "next/image";
import jag from "../public/jag.jpg";

function Avatar() {
  return (
    <div className="mb-3">
      <Image
        src={jag}
        alt="jag"
        height={180}
        width={180}
        className="rounded-full border-2 border-[#FC3A79] shadow-md"
      />
    </div>
  );
}

export default Avatar;
