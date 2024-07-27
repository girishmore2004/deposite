import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CreateUser from './components/CreateUser';
import TransactionForm from './components/TransactionForm';
import UserBalance from './components/UserBalance';
import './index.css';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/create-account" element={<CreateUser />} />
                    <Route path="/transaction" element={<TransactionForm />} />
                    <Route path="/check-balance" element={<UserBalance />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
