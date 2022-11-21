import React from "react";
// import qs from "qs";
import { useSearchParams } from "react-router-dom";
const About = () => {
  const [searchParams] = useSearchParams();
  const detail = searchParams.get("detail") === "true";
  return (
    <div>
      <h1>About Page</h1>
      <p>this is react router exam project</p>
      {detail && <p>추가적인 정보~~!</p>}
    </div>
  );
};

export default About;
