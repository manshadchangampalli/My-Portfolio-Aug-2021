import React, { useState } from "react";

function Navbar() {
  const [isDark, setIsDark] = useState(false)
  console.log(isDark);
  return (
    // its the navbar here logo and the text
    //  and darkmode icon also setted
    // the items styled in home . scss 


    <div className="nav">
      <div className="logo">
        <h1>MN.</h1>
      </div>
      <div className="text">
        <h3>UI DESIGNER & REACT JS DEV</h3>
      </div>
      <div onClick={()=>setIsDark(!isDark)} className="darkmode">
        <svg
          width="50"
          height="67"
          viewBox="0 0 66 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M33.9935 0.410569L33.6505 0L33.2641 0.370009L23.4091 9.8059H10.1577H9.6577V10.3059V23.2312H9.89192L0.364386 32.4718L0 32.8252L0.358883 33.1842L9.6577 42.4861V55.9185V56.4258L10.1649 56.4185L22.4197 56.2412L32.3372 65.7253L32.6762 66.0494L33.0213 65.7319L42.8224 56.715L55.7817 56.4184L56.2703 56.4072V55.9185V42.3029L64.7091 34.5394L64.7629 34.5912L65.4568 33.8711L65.4464 33.8611L65.5545 33.7616L64.8775 33.0257L64.725 33.1659L56.2703 25.0186V10.3059V9.8059H55.7703H41.8436L33.9935 0.410569ZM63.9877 33.8442L55.4234 25.5912L55.2703 25.4437V25.2312V10.8059H41.6098H41.376L41.2261 10.6265L33.5692 1.46232L23.9556 10.667L23.8106 10.8059H23.6098H10.6577V23.2312H10.6101L10.9582 23.5901L1.42498 32.8362L10.317 41.7312H10.6577V55.4112L23.1026 55.2312L23.1067 55.5145L32.6894 64.6784L42.1049 56.0163L42.0984 55.7313L55.2703 55.4298V41.7312H55.4148L63.9877 33.8442Z"
            fill="white"
          />
          <path
            d="M51.1099 33.7312C51.1099 43.6723 43.051 51.7312 33.1099 51.7312C23.1687 51.7312 15.1099 43.6723 15.1099 33.7312C15.1099 23.7901 23.1687 15.7312 33.1099 15.7312C43.051 15.7312 51.1099 23.7901 51.1099 33.7312Z"
            fill="black"
            stroke="white"
          />
          <path
            d="M14.6099 33.7312C14.6099 43.9485 23.1165 52.2312 33.6099 52.2312V15.2312C23.1165 15.2312 14.6099 23.5139 14.6099 33.7312Z"
            fill="white"
          />
          <path
            d="M41.6099 33.2312C41.6099 27.7084 37.5804 23.2312 32.6099 23.2312V43.2312C37.5804 43.2312 41.6099 38.754 41.6099 33.2312Z"
            fill="white"
          />
          <path
            d="M23.6099 33C23.6099 38.5228 27.6393 43 32.6099 43V23C27.6393 23 23.6099 27.4772 23.6099 33Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
}

export default Navbar;
