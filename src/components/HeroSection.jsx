import React from "react";
import { Scroll } from "@react-three/drei";
import box1iconimage from "../assets/box1iconimage.png";
import box2iconimage from "../assets/box1iconimage2.png";

const HerosectionFirst = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "transparent",
        position: "relative",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: "80px",
      }}
    >
      <div
        style={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          textAlign: "start",
          width: "42%",
        }}
      >
        <h1
          style={{
            fontSize: "100px",
            color: "#dc5f00",
            fontWeight: 700,
            lineHeight: "100px",
            textTransform: "uppercase",
          }}
        >
          Reinvent
        </h1>
        <h2
          style={{
            fontSize: "76px",
            fontWeight: 700,
            lineHeight: "100px",
            textTransform: "uppercase",
            color: "transparent",
            WebkitTextStroke: "0.3px white",
            opacity: 0.6,
            wordSpacing: "-25px",
          }}
        >
          Value Chain
        </h2>
        <p
          style={{
            fontSize: "18px",
            fontWeight: 700,
            lineHeight: "21px",
            textTransform: "uppercase",
            color: "#ffffff",
            margin: "10px 0px",
          }}
        >
          Reinvent the value chain, solve unique problems, and boost
          productivity, efficiency, and profitability with Bespoke AI solutions.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
          }}
        >
          <button
            style={{
              width: "30%",
              height: "100%",
              backgroundColor: "transparent",
              border: "2px solid #dc5f00",
              outline: "none",
              padding: "10px",
              borderRadius: "50px 5px 10px 10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              margin: "50px 0px",
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            CTA 1
          </button>
          <button
            style={{
              width: "30%",
              height: "100%",
              backgroundColor: "transparent",
              border: "2px solid #dc5f00",
              outline: "none",
              padding: "10px",
              borderRadius: "50px 5px 10px 10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              margin: "50px 0px 50px 50px",
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            CTA 2
          </button>
        </div>
      </div>
    </div>
  );
};

const HerosectionSecond = () => {
  return (
    <div
      style={{
        width: "100%",
        padding: "80px",
        background: "transparent",
      }}
    >
      <div
        style={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: "fit-content",
        }}
      >
        <h1
          style={{
            fontSize: "100px",
            fontWeight: 700,
            lineHeight: "115px",
            color: "#dc5f00",
          }}
        >
          REINVENTION
        </h1>
        <h2
          style={{
            fontSize: "56px",
            fontWeight: 300,
            lineHeight: "64px",
            textTransform: "uppercase",
            color: "transparent",
            WebkitTextStroke: "0.3px white",
            opacity: 0.6,
            wordSpacing: "-25px",
          }}
        >
          STRATEGY FOR SUCCESS
        </h2>
        <p
          style={{
            fontSize: "18px",
            fontWeight: 700,
            lineHeight: "30px",
            textTransform: "uppercase",
            color: "#ffffff",
            margin: "30px 0px",
            width: "50%",
          }}
        >
          The rate of change affecting businesses has risen over 183% in the
          last 4 years.
        </p>
        <p
          style={{
            fontSize: "18px",
            fontWeight: 700,
            lineHeight: "30px",
            textTransform: "uppercase",
            color: "#ffffff",
            margin: "30px 0px",
            width: "50%",
          }}
        >
          To counter this, 83% of organisations have accelerated the execution
          of reinvention with GenAI.
        </p>
      </div>
    </div>
  );
};

const HerosectionThird = () => {
  return (
    <div
      style={{
        width: "100%",
        background: "transparent",
        padding: "80px",
        height:"100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          fontSize: "30px",
          fontWeight: 300,
          lineHeight: "35px",
          textTransform: "uppercase",
          WebkitTextStroke: "0.3px white",
          WebkitTextFillColor: "transparent",
          opacity: 0.6,
          margin: "50px 0px",
        }}
      >
        in less than half the time against competitors
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "stretch",
          width: "55%",
        }}
      >
        {[box1iconimage, box2iconimage].map((src, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              flex: 1,
              border: "1px solid #dc5f00",
              background: "#262626",
              borderRadius: "10px",
              margin: "0px 10px",
            }}
          >
            <div style={{ height: "25%" }}>
              <img
                src={src}
                alt={`box${index + 1}iconimage`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <p
              style={{
                fontSize: "18px",
                fontWeight: 700,
                lineHeight: "21px",
                textAlign: "center",
                color: "#ffffff",
                width: "70%",
                textTransform: "uppercase",
                marginTop: "20px",
              }}
            >
              Greater improvements in productivity
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <Scroll html>
      <HerosectionFirst />
      <HerosectionSecond />
      <HerosectionThird />
    </Scroll>
  );
};

export default HeroSection;
