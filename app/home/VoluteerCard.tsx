import MMNTitle1 from "@/components/TItle-1";
import MMNPanel from "@/components/Panel";
import MMNButton from "@/components/Button";

export default function VolunteerCard(){
    return (
        <MMNPanel className="">
            <MMNTitle1 title="Become volunteer" color="purple" />
            <div className="leading-[28px]">
                MMN is an organisation for members, by members - run on support of our volunteer members. If you have the skill and time to offer for MMS community's benefit, we need you !
            </div>

            <div className="flex justify-end">
                <MMNButton title="Become volunteer" color="purple" />
            </div>
        </MMNPanel>
    )
}
