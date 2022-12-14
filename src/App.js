import {Login} from "./Components/Login";
import {Main} from "./Components/Main";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {AuthProvider} from "./Contexts/AuthContext";
import SignUp from "./Components/SignUp";

function App() {
    return (
        <div>
            <Router>
                <AuthProvider>
                    <Routes>
                        <Route path="/main" element={<Main/>}/>
                        <Route path="/" element={<Login/>}/>
                        <Route path="/signup" element={<SignUp/>}/>
                    </Routes>
                </AuthProvider>

            </Router>
        </div>
    );
}

export default App;