import {Login} from "./Components/Login";
import {Main} from "./Components/Main";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {AuthProvider} from "./Contexts/AuthContext";

function App() {
    return (
        <div style={{fontFamily: 'Avenir'}}>
            <Router>
                <AuthProvider>
                    <Routes>
                        <Route path="/main" element={<Main/>}/>
                        <Route path="/" element={<Login/>}/>
                    </Routes>
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;