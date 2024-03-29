
import MMNButton from "@/components/Button";
import MMNContainer from "@/components/Container";

import MMNTitle1 from "@/components/TItle-1";
import { useState } from "react";
import Paypane from "./Paypane";
import { AccountInfo, ModalProps } from "@/constants/types";
import MemberInfoPane from "./MemberInfoPane";
import Modal from 'react-modal';

const defUser: AccountInfo = {
    firstName: "",
    lastName: "",
    birth: "",
    email: "",
    gender: 'male',
    relation: '',
    memberid: '',
}

Modal.setAppElement('#modal-container');

interface FamilyMemberModalProps {
    open: boolean
    onClose: () => void
    onSave: (memeber: AccountInfo) => void
}

export default function FamilyMemberModal({ open, onClose, onSave }: FamilyMemberModalProps) {
    const [member, setMember] = useState<AccountInfo | null>(null)

    const handleDone = () => {
        if (!member) return;

        onSave(member);
        onClose();
        setMember(null);
    }

    const handleOnChange = (key: keyof AccountInfo, value: any) => {
        setMember(prev => ({ ...prev!, [key]: value }));
    }

    return (
        <Modal isOpen={open} onRequestClose={onClose} className={""}>
            <div className="flex flex-col gap-[10px]">
                <div className="font-bold leading-[28px]">Member1</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[26px] leading-[28px]">
                    <div>
                        <div>First name*</div>
                        <input type="text" className="px-[14px] py-[16px] border-[1px] border-[#BCBCBC] rounded-[6px] leading-[24px] w-full"
                            placeholder="Enter First Name"
                            value={member?.firstName || ''}
                            onChange={e => handleOnChange("firstName", e.target.value)}
                        />
                    </div>
                    <div>
                        <div>Last name*</div>
                        <input type="text" className="px-[14px] py-[16px] border-[1px] border-[#BCBCBC] rounded-[6px] leading-[24px] w-full"
                            placeholder="Enter Last Name"
                            value={member?.lastName || ''}
                            onChange={e => handleOnChange("lastName", e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <button onClick={handleDone}>save</button>
        </Modal>
    )
}