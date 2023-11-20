import React from 'react'

const Header = () => {
    return (
        <div className="w-[360px] h-[68px]">
            <div className="fixed w-[360px] h-[68px] top-0 left-0 bg-white" >
                <img src={require("../../public/images/hamburgerMenu.svg")} alt="" />
                <img src={require("../../public/images/Logo Igralishte final version 1.png")} alt="" />
                <img src={require("../../public/images/search.svg")} alt="" />
            </div>
        </div>
    )
}

export default Header
