interface Props {
    title: string,
    color: "purple" | "white",
    className?: string
}

export default function MMNTitle1(params: Props){
    let className = "font-semibold text-[24px] leading-[36px] ";
    if(params.color == "purple") className += "text-mmn-purple";
    if(params.color == "white") className += "text-white";

    return (
        <div className={`${className} ${params.className}`}>
            { params.title }
        </div>
    )
}