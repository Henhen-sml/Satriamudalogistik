import { AppProps } from 'next/dist/shared/lib/router/router';
import Button from "components/Button";
import Input from "components/Input";
import { UserCredential, getAuth, signInWithCustomToken, signInWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Cookie from "js-cookie";
import Page from "components/Page";
import { NavItems } from "types";
import Navbar from "components/Navbar";
import { ColorModeScript } from 'nextjs-color-mode';
import { GlobalStyle } from 'components/GlobalStyles';
import { LoginProvider } from 'contexts/LoginContext';

const NavbarAdm:NavItems = [
    {title: "panel" , href: "/adm/panel"},
    {title: "undangan" , href: "/adm/undangan"},
    {title: "statistic" , href: "/adm/statistic"},
    {title: "settings" , href: "/adm/settings"},
]


function Admin({ Component, pageProps } : AppProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const AuthCookie = Cookie.get('auth');
            if(AuthCookie){
                setIsLoggedIn(true);
            }
    }, [])


    function Login() {
        const EmailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const PswdRegex: RegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
        const isValidEmail: Boolean = EmailRegex.test(email);
        const isValidPswd: Boolean = PswdRegex.test(password);
        
        if(isValidEmail && isValidPswd){

            if(email && password != null){
                const Auth = getAuth();
                signInWithEmailAndPassword(Auth, email, password).then((val: any) => {
                    let accessToken:string = val.user.accessToken;
                    Cookie.set('auth', accessToken, { expires: 24 * 60* 60 * 1000});
                    setIsLoggedIn(true);
                    console.log(accessToken);
                }).catch((err) => {
                    console.log(err)
                    alert('You are not admin')
                })
            }else{
                alert('youre Not The Admin')
            }
        }else{
            alert('You Not The Admin')
        }
    }

    function Logout() {
        Cookie.remove('auth');
        setIsLoggedIn(false);
    }

    return(
        <>
        {isLoggedIn ? (
            <LoginProvider>  
                <ColorModeScript />
                <GlobalStyle />
                <Navbar items={NavbarAdm} />
                    {pageProps}
            </LoginProvider>
        ): (

        <Page title="Admin Section">
            <Input placeholder="Admin Input" type="email" onChange={(e) => setEmail(e.target.value)}/>
            <Input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
            <Button onClick={(e) => Login()}>Login</Button>
        </Page>
            )}
        </>
    )
}
export default Admin;