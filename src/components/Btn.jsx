import React from "react";
import Button from "react-bootstrap/Button";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const Btn = ({ children, role, variant, type, callback }) => {
  const checkBtnRole = () => {
    if (role === "play") return <FaPlay size="20" />;

    if (role === "pause") return <FaPause size="20" />;

    if (role === "settings") return <IoMdSettings size="35" color="black" />;
  };

  return (
    <Button type={type} className="m-1" variant={variant} onClick={callback}>
      {role ? checkBtnRole() : children}
    </Button>
  );
};

export default Btn;
