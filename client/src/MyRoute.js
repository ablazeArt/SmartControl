import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import App from "./App";
import EditComponent from "./components/EditComponent";

const MyRoute = ()=>{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/command/edit/:commandId" element={<EditComponent/>}/>
            </Routes>
        </Router>
    )
}

export default MyRoute