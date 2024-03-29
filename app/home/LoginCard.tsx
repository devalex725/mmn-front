import MMNTitle from "@/components/MMNTItle";
import MMNPanel from "@/components/MMNPanel";
import MMNButton from "@/components/MMNButton";
import GoogleButton from "@/components/GoogleButton";

export default function LoginCard(){
    return (
        <MMNPanel className="">
            <MMNTitle title="Already member?" color="purple" />
            <GoogleButton title="Log in with Google" className="max-w-full"/>
            <div className="font-bold leading-[28px] text-center">
                OR
            </div>

            <div className="flex flex-col gap-[10px]">
                <div className="flex flex-col gap-[5px]">
                    <div className="leading-[28px]">Member id/Email id</div>
                    <input type="text" className="px-[14px] py-[16px] border-[1px] border-[#BCBCBC] rounded-[6px] leading-[24px] w-full" placeholder="Enter member ID/Email id" />
                </div>

                <div className="flex flex-col gap-[5px]">
                    <div className="leading-[28px]">Password</div>
                    <input type="text" className="px-[14px] py-[16px] border-[1px] border-[#BCBCBC] rounded-[6px] leading-[24px] w-full" placeholder="Enter password" />
                </div>

                <div className="flex justify-end">
                    <MMNButton title="Login" color="purple" size="normal"/>
                </div>
            </div>
        </MMNPanel>
    )
}