export interface AccountInfo {
    firstName: string,
    lastName: string,
    birth: string,
    email: string,
    gender: 'male' | 'female',
    relation: string,
    memberid: string,
}

export const Genders = [
    { value: "male", label: "Male" },
    { value: "female", label: "FeMale" },
];

export const Relationships = [
    { value: "child", label: "Child" },
    { value: "friend", label: "Friend" },
]
