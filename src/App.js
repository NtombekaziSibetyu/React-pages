import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewForm from "./Components/Forms/NewForm";
import SignIn2 from "./Components/Forms/Sign-in2";
import DoctorDetails from "./Components/DoctorDetails";
import LandingRep from "./Components/LandingRep";
import ChatDoc1 from "./Components/ChatDoc1";
import { Component } from "react/cjs/react.production.min";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn2 />} />
            <Route path="/landing-rep" element={<LandingRep />} />
            <Route path="/doc-details" element={<DoctorDetails />} />
            <Route path="/doc-chat" element={<ChatDoc1 />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
