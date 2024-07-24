import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";


export function Home(){
    return <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>  
    </div>
}