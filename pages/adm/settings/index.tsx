import { useRouter } from "next/router"
import { useEffect } from "react"
import Cookies from "js-cookie";
import Button from "components/Button";
import styled from "styled-components";
import Navbar from "components/Navbar";
import { NavItems } from "types";

const NavbarAdm:NavItems = [
    {title: "panel" , href: "/adm/panel"},
    {title: "undangan" , href: "/adm/undangan"},
    {title: "statistic" , href: "/adm/statistic"},
    {title: "settings" , href: "/adm/settings"},
]

export default function Settings() {
    const Auth:any = Cookies.get('auth')
    const route:any = useRouter();

    useEffect(() => {
        if(!Auth){
            alert('You Not Supposed to here before login ?')
            route.push('/')
        }
    })

    function Logout() {
        Cookies.remove('auth')
        route.push('/')
    }

    return(
        <>
        <Navbar items={NavbarAdm} />
        Settings
            <Button onClick={(e) => Logout()}>LogOut</Button>
        </>
    )

}


const Title = styled.h1`
text-align: center;
padding-top: 45rem;
`