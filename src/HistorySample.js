import React from "react";
import { useNavigate } from "react-router-dom";

function HistorySample() {
  const navigate = useNavigate();
  const goBack = () => {
    const confirm = window.confirm("are you leaving?");
    if (confirm) {
      navigate(-1);
    }
  };
  const goHome = () => {
    navigate("/");
  };
  return (
    <div>
      <button onClick={goBack}>goBack</button>
      <button onClick={goHome}>goHome</button>
    </div>
  );
}

export default HistorySample;
