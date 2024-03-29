"use client";

import MMNButton from "@/components/Button";
import { useState } from "react";
import { AccountInfo } from "@/constants/types";
import TrashButton from "@/components/icons/trash";
import FamilyMemberModal from "./FamilyMemberModal";


interface Props {
    account?: AccountInfo,
}

const defUser: AccountInfo = {
    firstName: "Alex",
    lastName: "Bilakh",
    birth: "2001-3-14",
    email: "alex@gmail.com",
    gender: 'male',
    relation: 'me',
    memberid: 'FKEFOEFLKE@@#()($DFWE',
}

const GetMemberLine = (member: AccountInfo) => {
    // const aaa = member.relation;
    return (
        <div className="py-[10px] flex justify-between items-center">
            <div> {`${member.firstName} ${member.lastName}`} </div>
            {
                member.relation == 'me' ? <div className="px-[10px] py-[6px] text-[12px] leading-[18px] rounded-[6px] bg-[#F1F6FF]"> Primary member </div> : <TrashButton />
            }
        </div>
    )
}

export default function Paypane(params: Props) {
    
    const mainAccount = params.account as AccountInfo;
    const [familyAccounts, setFamilyAccounts] = useState<AccountInfo[]>([])
    const [price, setPrice] = useState<number>(0);
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

    const handleAddMemberClick = () => {

    }

    const PayClicked = () => {

    }
    console.log("familyAccounts", familyAccounts)
    return (
        <>
            <div className="flex flex-col gap-[14px]">
                <div className={`flex flex-col gap-[5px]`}>
                    {
                        GetMemberLine(mainAccount)
                    }

                    {
                        familyAccounts.map((account, index) => {
                            return <div key={index}>{GetMemberLine(account)}</div>
                        })
                    }

                </div>
                <div onClick={() => setIsOpenModal(true)}>
                    <MMNButton title="+ Add family member" color="white" className={"max-w-full"} />
                </div>
                <div className="flex justify-between font-semibold text-mmn-purple">
                    <div className="text-[16px] leading-[24px]">
                        Total payment
                    </div>

                    <div className="text-[24px] leading-[36px]">kr {price}</div>
                </div>

                <div className="flex justify-end">
                    <MMNButton title="Proceed to pay" color="purple" />
                </div>
            </div>
            <FamilyMemberModal open={isOpenModal} onClose={() => setIsOpenModal(false)} onSave={(member) => setFamilyAccounts((prev) => ([...prev, member]))} />
        </>
    )
}