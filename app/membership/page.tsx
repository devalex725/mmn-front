import { Metadata } from "next";
import { GetPageTitle, FavIcon } from "../../constants"

const title = GetPageTitle("Membership");

export const metadata = {
    title : title, 
    icons : FavIcon
};

export default function MemberShipPage(){
    return (
        <>
            <div>MemberShipPage</div>
        </>
    );
}