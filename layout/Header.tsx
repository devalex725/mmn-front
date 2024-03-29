"use client";

import { Img } from "react-image";
import SubMenuItem from "./SubMenuItem";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const menuItems = [
    { title: "Home", link : "/home"},
    { 
        title: "About us", 
        link: "/aboutus",
        subItems: [
            { title: "Mission and Vision", link : ""},
            { title: "MMN History", link : ""},
            { title: "MMN Constitution", link : ""},
            { title: "Committee Members", link : "/committeemember"},
            { title: "Become a MMN member", link : ""},
        ]
    },
    { title: "MemberShip", link : "/membership"},
    { title: "Event", link : ""},
    { title: "Gallery", link : ""},
    { title: "MMN Initiatives", link : ""},
    { title: "Contact us", link : ""},
    { title: "Login", link : ""},
]

export default function HeaderBar(){
    const [selectedTitle, setSelectedTitle] = useState("Home");
    const router = useRouter();

    const menuClicked = (menuTitle:string, link:string) => {
        setSelectedTitle(menuTitle);
        if(link != "") router.push(link);    
    }

    const RenderItems = menuItems.map( (item, index) =>  {
        const subItemList = item.subItems;
        
        if(subItemList == undefined){
            return (
                <div className={`flex border-b-[2px] rounded-b-[6px] px-[30px] py-[15px] cursor-pointer 
                    ${selectedTitle == item.title ? "text-white bg-[#FF5733] border-[#FFC5B9]" : "bg-white border-white"}
                    hover:bg-[#EAEAEA] hover:border-[#FFC5B9]`}
                    onClick={() => menuClicked(item.title, item.link)}
                    key={index}
                    >
                    <div className="leading-[21px] self-center">
                        {item.title}
                    </div>
                </div>
                    )
        }else{
            return <SubMenuItem item={ item } key={index}/>
        }
    });

    return (
        <div className="w-full flex gap-[10px] px-[30px] z-[3]">
            <Img src="/image/logo/headerlogo.png" className="py-[15px]" />
            <div className="flex-grow px-[30px] xl:flex gap-[1px] justify-end hidden">
                { RenderItems }
            </div>
        </div>
    )
}