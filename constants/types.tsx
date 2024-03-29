export interface AccountInfo {
    firstName: string,
    lastName: string,
    birth: string,
    email: string,
    gender: 'male' | 'female',
    relation: string,
    memberid: string,
}

export interface ModalProps {
    title: string,
    children: React.ReactNode,
    showModal: boolean,
    onClose: () => void,
    onOk: () => void
}
