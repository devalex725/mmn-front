import MMNTitle from "@/components/MMNTItle";
import MMNPanel from "@/components/MMNPanel";
import MMNButton from "@/components/MMNButton";

export default function EventPane(){
    return (
        <MMNPanel className="bg-[#FF5733]">
            <MMNTitle title="Become a member" color="purple" />
            <div className="leading-[21px] text-white">
                Price: 
                <div className="inline text-red-500 bg-white mx-[8px] px-[8px] py-[4px] rounded-[3px]">kr 150</div>
                per member
            </div>

            <div className="leading-[28px] text-white">
            MMN Membership goes from January to December of each year. Do check our membership benefits and join us.
            </div>

            <div className="flex justify-end">
                <MMNButton title="Become a member" color="white" />
            </div>
        </MMNPanel>
    )
}