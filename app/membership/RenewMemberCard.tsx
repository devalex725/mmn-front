
import MMNButton from "@/components/Button";
import MMNContainer from "@/components/Container";

import MMNTitle1 from "@/components/TItle-1";
import { useState } from "react";
import Paypane from "./Paypane";
import { FamilyAccountInfo } from "@/constants/types";

interface Props {
    className?: string,
}

const defUser: FamilyAccountInfo = {
    firstName: "Alex",
    lastName: "Bilakh",
    birth: "2001-3-14",
    email: "alex@gmail.com",
    gender: 'male',
    relation: 'me',
    memberid: 'FKEFOEFLKE@@#()($DFWE',
}

export default function RenewMemberCard(params: Props) {
    const [accountID, setAccountID] = useState<string>("1234567890");
    const [account, setAccount] = useState<FamilyAccountInfo>();

    const handleRenewNowClick = () => {
        if (accountID == "" || accountID == undefined)
            return;

        setAccount(defUser);
    }

    return (
        <div className={`flex flex-col p-[24px] gap-[14px] rounded-[10px] border-[1px] border-[#D9D9D9] h-max ${params.className || ""}`}>
            <MMNTitle1 title="Renew membership?" color="purple" />
            <div className="flex flex-wrap gap-[10px]">
                <span>Price:</span>
                <span className="font-semibold">{" kr 160 "}</span>
                <span>per member</span>
            </div>

            <div className="italic leading-[28px]">
                <span>To renew your membership, please enter your</span>
                <span className="font-bold">{" Member ID"}</span>
                <span>{" or "}</span>
                <span className="font-bold">Registered Email ID</span>
            </div>

            <div className="flex flex-col gap-[5px]">
                <div>{"Member id/Email id *"}</div>
                <input type="text" className="px-[14px] py-[16px] border-[1px] border-[#BCBCBC] rounded-[6px] leading-[24px] w-full"
                    placeholder="Enter member ID"
                    value={accountID}
                    onChange={e => setAccountID(e.target.value)}
                />
            </div>

            {
                account == undefined ?
                    <div className="flex justify-end" onClick={handleRenewNowClick}>
                        <MMNButton title="Renew membership now" color="purple" />
                    </div>
                    : <Paypane account={account}/>
            }
        </div>
    )
}