import React from "react";
import "./css/Header.css";

function Header() {
    return (
        <div className="header">
            <p
                style={{
                    fontSize: "20px",
                    padding: 0,
                    margin: 0,
                }}
            >
                TADA
            </p>
            <img
                src="https://danirudev.ml/img/profile_pic.png"
                alt=""
                className="header__profilePic"
            />
        </div>
    );
}

export default Header;
