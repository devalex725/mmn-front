
interface Props {
    title: string,
    size: "big" | "normal" | "small",
    className: string | null | undefined
}

export default function MMNButton(params: Props){
    let className: string = "flex cursor-pointer rounded-[6px] max-w-max";
    switch(params.size){
        case "big":{
            break;
        }
        case "normal":{
            className += " px-[20px] py-[13px]";
            break;
        }
        case "small":{
            className += " p-[10px]";
            break;
        }
    }

    return (
        <div className={`${className} ${params.className}`} >
            <div className="leading-[24px] text-[16px] self-center">
                { params.title }
            </div>
        </div>
    )
}