import { useState } from "react";

interface Item{
    title: string,
    link: string,
}

interface Props {
    text: string,
    itemList: Item[] | undefined
}

export default function SubMenuItem(params: Props){
    
    const [popupFlag, setPopupFlag] = useState(false);

    const items = params.itemList;
    const title = params.text;

    return (
            <div className={`flex relative px-[30px] py-[15px] border-b-[2px] rounded-b-[6px] cursor-pointer bg-white border-white`}
                onMouseOver={e => setPopupFlag(true)}
                onMouseLeave={e => setPopupFlag(false)}
                >
                <div className="leading-[21px] self-center flex gap-[6px]">
                    <span> { title } </span>
                    <span> {popupFlag ? "▲" : "▼" } </span>
                </div>

                {
                popupFlag ?
                <div className="absolute top-[83px] left-[5px] w-max border-b-[2px] rounded-b-[6px] border-[#808080] border-b-[2px] bg-[#ECE9E9] flex flex-col p-[2px]">
                    {
                        items?.map((item, index) => (
                            <div className="flex cusor-pointer hover:text-[#FF5733] hover:bg-white p-[20px] animate-dissolve ease-out duration-300" key={index}>
                                <div className="lead-[21px] self-center">{item.title}</div>
                            </div>   
                        ))
                    }
                </div> : <></>
                }
            </div>
    )
}