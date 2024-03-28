import MMNTitle1 from "@/components/TItle-1";
import MMNPanel from "@/components/Panel";
import MMNButton from "@/components/Button";

export default function MemberCard(){
    return (
        <MMNPanel className="bg-[#FF5733]">
            <MMNTitle1 title="Become a member" className="text-white" />
            <div className="leading-[21px] text-white">
                Price: 
                <div className="inline text-red-500 bg-white mx-[8px] px-[8px] py-[4px] rounded-[3px]">kr 150</div>
                per member
            </div>

            <div className="leading-[28px] text-white">
            MMN Membership goes from January to December of each year. Do check our membership benefits and join us.
            </div>

            <div className="flex justify-end">
                <MMNButton title="Become a member" className="text-[#00205B] bg-white" size="normal" />
            </div>
        </MMNPanel>
    )
}