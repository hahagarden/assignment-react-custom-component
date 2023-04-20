import { useState } from "react";
import styled from "styled-components";

const ToggleContainer = styled.div`
  position: relative;
  margin-top: 8rem;
  left: 47%;
  cursor: pointer;

  > .toggle-container {
    width: 60px;
    height: 32px;
    border-radius: 30px;
    background-color: #8b8b8b;
    overflow: hidden;

    > .toggle-inner {
      display: block;
      width: 120px;
      height: 32px;
      margin-left: -100%;
      background: linear-gradient(to right, var(--coz-purple-600) 50%, #8b8b8b 50%);
      transition: margin-left 0.4s;
    }

    &.toggle--checked .toggle-inner {
      margin-left: 0;
      transition: margin-left 0.4s;
    }
  }

  > .toggle-circle {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #ffffff;

    &.toggle--checked {
      left: 32px;
    }

    transition: left 0.4s;
  }
`;

const Desc = styled.div`
  width: 200px;
  text-align: center;
  margin: 0 auto;
`;

export const Toggle = () => {
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    setisOn((prev) => !prev);
  };

  return (
    <>
      <ToggleContainer onClick={toggleHandler}>
        <div className={`toggle-container ${isOn ? "toggle--checked" : ""}`}>
          <div className="toggle-inner" />
        </div>
        <div className={`toggle-circle ${isOn ? "toggle--checked" : ""}`} />
      </ToggleContainer>
      <Desc>Toggle Switch {isOn ? "ON" : "OFF"}</Desc>
    </>
  );
};
