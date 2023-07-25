import { React, useState, useEffect } from "react";
import Header from './Header';
import DataControl from './DataControl';
import SignIn from './SignIn';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { auth } from "../firebase";
import TDEECalculator from "./TDEECalculator";


function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Header currentUser={currentUser}/>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/tdee" element={<TDEECalculator />} />
        <Route path="/" element={<DataControl />} currentUser={currentUser}/>
      </Routes>
    </Router>
  );
}

export default App;
