

import MMNContainer from "@/components/Container";

import MMNTitle1 from "@/components/TItle-1";

export default function BlogPane() {
    return (
        <div className="flex flex-col gap-[10px]">
            <MMNTitle1 title="Become a member" color="purple" />
            <div className="flex flex-col gap-[5px]">
                <div className="font-bold leading-[28px]">
                    Marathi Mandal Norway - Membership 2023
                </div>
                <div className="leading-[28px]">
                    This form is sent to you for the membership of Marathi Mandal Norway 2023.Please read this form carefully and fill in correct information and pay the applicable membership fee for your family.
                </div>
            </div>
        </div>
    )
}