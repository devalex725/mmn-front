interface Props {
    title: string,
    className: string
}

export default function MMNTitle1(params: Props){
    return (
        <div className={`font-semibold text-[24px] leading-[36px] ${params.className}`}>
            { params.title }
        </div>
    )
}