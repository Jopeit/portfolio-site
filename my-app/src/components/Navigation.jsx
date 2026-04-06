import React from "react";
import githubLogo from "../assets/github_logo.png";
import telegramLogo from "../assets/telegram_logo.png";
import phoneLogo from "../assets/phone_logo.png";
import gmailLogo from "../assets/gmail_logo.png";
import cvFile from "../assets/CV_Vladzio.pdf";

export default function Navigation(){
    return(
    <nav className="navigation">
        <a href="#home">About me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href={cvFile} download>CV</a>

        <div className="links">
            <button className="link-btn" data-panel="github" onClick={() => window.open("https://t.me/jopeit", "_blank")}><img src={githubLogo} alt="github_logo"/></button>
            <button className="link-btn" data-panel="telegram"><img src={telegramLogo} alt="telegram_logo"/></button>
            <button className="link-btn" data-panel="phone"><img src={phoneLogo} alt="phone_logo"/></button>
            <button className="link-btn" data-panel="gmail"><img id="gmail" src={gmailLogo} alt="gmail_logo"/></button>
        </div>
    </nav>
)}