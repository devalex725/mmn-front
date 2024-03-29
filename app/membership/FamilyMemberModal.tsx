
import { useState } from "react";
import { AccountInfo, Genders, Relationships } from "@/constants/types";
import FamilyInfoPane from './FamilyInfoPane'

import MMNButton from "@/components/Button";
import MMNTitle1 from "@/components/TItle-1";
import Modal from 'react-modal';

const customStyles = {
    content: { width: '50%', margin: 'auto', padding: '40px', height: 'max-content' },
    overlay: { zIndex: 1000 }
};

Modal.setAppElement('#modal-container');

interface FamilyMemberModalProps {
    open: boolean
    onClose: () => void
    onSave: (memeber: AccountInfo) => void
}

export default function FamilyMemberModal({ open, onClose, onSave }: FamilyMemberModalProps) {
    
    let member: AccountInfo | null = null;

    const setMember = (_member: AccountInfo | null) => {
        member = _member;
    }
    
    const handleDone = () => {
        if (!member) return;

        onSave(member);
        onClose();
        setMember(null);
    }

    return (
        <Modal isOpen={open} onRequestClose={onClose} style={customStyles}>
            <div className="flex flex-col gap-[30px]">

                <div className="flex justify-between items-center">
                    <MMNTitle1 title="Add family members" color="purple" />
                    <div className="closeButton cursor-pointer" onClick={onClose}>
                        <img src="/xmark.circle.fill.svg" />
                    </div>
                </div>
                <FamilyInfoPane account={member} setMember={setMember}/>
                <div className="flex justify-end gap-[20px]">
                    <div onClick={onClose}>
                        <MMNButton title="Close" color="white" className={"border-[1px] border-[#00205B]"} />
                    </div>

                    <div onClick={handleDone}>
                        <MMNButton title="Done" color="purple" />
                    </div>
                </div>
            </div>
        </Modal>
    )
}