import "./Home.css";
import ListItemHome from "../ListItemHome/ListItemHome"
export default function Home (){
    return(
        <header className="bg-primary">
            <h1>Proyect - Rick & Morty</h1>
            <nav>
                <ul>
                    <ListItemHome dato="Characters" otraData="true"/>
                    <ListItemHome dato="Contact"/>
                </ul>
            </nav>
        </header>
    )

}