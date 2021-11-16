import React from "react";
import Button from "react-bootstrap/Button";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const Btn = ({ role, variant, callback }) => {
  const checkBtnRole = () => {
    if (role === "play") return <FaPlay size="20" />;

    if (role === "pause") return <FaPause size="20" />;

    if (role === "settings") return <IoMdSettings size="35" color="black" />;
  };

  return (
    <Button className="m-1" variant={variant}>
      {checkBtnRole()}
    </Button>
  );
};

export default Btn;
