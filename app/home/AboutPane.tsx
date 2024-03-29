
import MMNContainer from "@/components/Container";
import MMNTitle1 from "@/components/TItle-1";

const blog:string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
 + "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

export default function AboutPane(){
    return (
        <MMNContainer>
            <div className="pt-[30px] pb-[40px]">
                <MMNTitle1 title="About MMN" color="purple" />
                <div className="leading-[28px]">
                    { blog }
                </div>
            </div>
        </MMNContainer>
    )
}