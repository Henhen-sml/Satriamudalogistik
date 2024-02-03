import { useRouter } from "next/router"
import { useEffect } from "react"
import Cookies from "js-cookie";
import styled from "styled-components";
import Navbar from "components/Navbar";
import { NavItems } from "types";
import PagesPanel from "./pages";

const NavbarAdm:NavItems = [
    {title: "panel" , href: "/adm/panel"},
    {title: "undangan" , href: "/adm/undangan"},
    {title: "statistic" , href: "/adm/statistic"},
    {title: "settings" , href: "/adm/settings"},
]

export default function Panel() {
    const Auth:any = Cookies.get('auth')
    const route:any = useRouter();

    useEffect(() => {
        if(!Auth){
            alert('You Not Supposed to here before login ?')
            route.push('/')
        }
    })

    return(
        <>
        <Navbar items={NavbarAdm} />
            <PagesPanel />
        </>
    )

}


const Title = styled.h1`
text-align: center;
padding-top: 45rem;
`