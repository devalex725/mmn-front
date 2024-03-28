const data = [
    {
        title:"Quick links", items:[
        { title: "Become a member", link: "" }, 
        { title: "Become a volunteer", link: "" }, 
        { title: "FAQ", link: "" }, 
        { title: "Terms & Conditions", link: "" }, 
    ]},
    {
        title:"MMN Initiatives", items:[
        { title: "Marathi Shaala", link: "" }, 
    ]},
    {
        title:"Social Media", items:[
        { title: "Facebook", link: "" }, 
        { title: "Instagram", link: "" }, 
        { title: "Youtube", link: "" }, 
    ]},
    {
        title:"Reach us", items:[
        { title: "mmn@marathimandal-norway.no", link: "" }, 
    ]},
]


const GetSubItem = (title:string, subItmes: any[], key:number | string) => {
    return (
        <div className="flex flex-col gap-[10px] rounded-[5px]" key={key}>
            <h3 className="font-semibold text-[16px] leading-[24px]">{ title }</h3>
            <div className="flex flex-col gap-[10px]">
                {
                    subItmes.map((item, index) => (
                        <span className="font-medium leading-[21px] underline cursor-pointer" key={index}> {item.title} </span>
                    ))
                }
            </div>
        </div>
    )
}
export default function FooterBar(){
    const RenderItem = data.map((item, index) => {
        return GetSubItem(item.title, item.items, index);
    });

    return (
        <div className="w-full py-[40px] border-t-[1px] border-[#D9D9D9] bg-[#F1F1F1]">
            <div className="w-full px-[90px] grid sm:grid-cols-2 md:grid-cols-4 grid-col-1 gap-[40px]">
                { RenderItem }
            </div>
        </div>
    )
}