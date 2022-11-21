import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const WithRouterSample = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      <h4>params</h4>
      <textarea value={JSON.stringify(params)} readOnly />
      <h4>location</h4>
      <textarea value={JSON.stringify(location, null, 2)} readOnly />
      <h4>navigate</h4>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
};

export default WithRouterSample;
