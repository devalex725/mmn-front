import MMNButton from "@/components/Button";
import MMNTitle1 from "@/components/TItle-1";

export default function PaymentCard() {
    return (
        <div className="rounded-[10px] p-[24px] border border-[#D9D9D9] bg-[#FF5733] flex flex-col gap-[14px] text-white max-w-[420px] w-1/2 h-max">
            <MMNTitle1 title="Total Payment" color="white" />
            
            <div className="grid grid-cols-2 leading-[28px]">
                <div>Total</div>
                <div className="font-bold text-[18px]">kr 160</div>
            </div>

            <div className="grid grid-cols-2">
                <div></div>
                <MMNButton title="Proceed payment" color="white" className={"min-w-max"} />
            </div>
        </div>
    )
}