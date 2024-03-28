import MMNTitle1 from "@/components/TItle-1";
import MMNPanel from "@/components/Panel";
import MMNButton from "@/components/Button";
import GoogleButton from "@/components/GoogleButton";

export default function LoginCard(){
    return (
        <MMNPanel className="">
            <MMNTitle1 title="Already member?" className="text-[#00205B]" />
            <GoogleButton title="Log in with Google"/>
            <div className="font-bold leading-[28px] text-center">
                OR
            </div>

            <div className="flex flex-col gap-[10px]">
                <div className="flex flex-col gap-[5px]">
                    <div className="leading-[28px]">Member id/Email id</div>
                    <input type="text" className="px-[14px] py-[16px] border-[1px] border-[#BCBCBC] rounded-[6px]" placeholder="Enter member ID/Email id" />
                </div>

                <div className="flex flex-col gap-[5px]">
                    <div className="leading-[28px]">Password</div>
                    <input type="text" className="px-[14px] py-[16px] border-[1px] border-[#BCBCBC] rounded-[6px]" placeholder="Enter password" />
                </div>

                <div className="flex justify-end">
                    <MMNButton title="Login" className="text-white bg-[#00205B]" size="normal"/>
                </div>
            </div>
        </MMNPanel>
    )
}