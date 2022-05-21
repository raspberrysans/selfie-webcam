// @flow
import * as React from "react";
import "./App.css";
export const Navbar = () => {
  return (
    <div
      style={{
        flexDirection: "row",
        display: "flex",
        width: "100%",
        height: "10%",
        color: "#A1A0A1",
        justifyContent: "space-between",
        paddingTop: "5%",
        fontFamily: "monospace",
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: "2px",
      }}
    >
      <div
        style={{
          marginLeft: "20%",
        }}
      >
        sansverse.co
      </div>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-evenly",
          marginRight: "20%",
        }}
      >
        <div className="navbarlink">
          <a
            href="https://www.github.com/raspberrysans"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <div className="navbarlink">
          <a
            href="https://www.instagram.com/sansverse.co/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
        <div className="navbarlink">
          <a href="https://www.sansverse.co/" target="_blank" rel="noreferrer">
            Website
          </a>
        </div>
      </div>
    </div>
  );
};
