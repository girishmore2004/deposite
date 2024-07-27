import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleCreateAccount = () => {
        navigate('/create-account');
    };

    const handleTransaction = () => {
        navigate('/transaction');
    };

    const handleCheckBalance = () => {
        navigate('/check-balance');
    };

    const [hovered, setHovered] = useState(null);

    const buttonStyle = {
        width: '100px',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%', // Ensures the button is circular
        fontSize: '14px', // Adjust the font size
        padding: '10px',
        color: '#fff',
        border: '2px solid white', // Default border
        cursor: 'pointer',
        transition: 'background-color 0.3s, color 0.3s, border-color 0.3s, box-shadow 0.3s',
        boxShadow: '0 0 0 rgba(0,0,0,0)', // Default box shadow 
    };

    const buttonHoverStyle = {
        backgroundColor: '#000', // Default hover background color
        color: '#fff', // Default hover text color
        borderColor: '#fff', // Border color on hover
        boxShadow: '0 0 10px rgba(255,255,255,0.8)', // Shine effect
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '15px',
        flexWrap: 'wrap', // Allows buttons to wrap in smaller viewports
        padding: '20px',
        marginTop:"60px",
        
    };

    return (
        <div className="container text-center my-5">
            <h1 className="mb-4" style={{ color: "black" }}>Welcome to Fintech Platform</h1>
            <div style={containerStyle}>
                <button
                    style={{
                        ...buttonStyle,
                        backgroundColor: hovered === 'create' ? buttonHoverStyle.backgroundColor : 'rgb(8 80 101)',
                        color: hovered === 'create' ? buttonHoverStyle.color : '#fff',
                        borderColor: hovered === 'create' ? buttonHoverStyle.borderColor : 'transparent',
                        boxShadow: hovered === 'create' ? buttonHoverStyle.boxShadow : '0 0 0 rgba(0,0,0,0)',
                    }}
                    onMouseEnter={() => setHovered('create')}
                    onMouseLeave={() => setHovered(null)}
                    onClick={handleCreateAccount}
                >
                    Create Account
                </button>
                <button
                    style={{
                        ...buttonStyle,
                        backgroundColor: hovered === 'transaction' ? buttonHoverStyle.backgroundColor : 'rgb(8 80 101)',
                        color: hovered === 'transaction' ? buttonHoverStyle.color : '#fff',
                        borderColor: hovered === 'transaction' ? buttonHoverStyle.borderColor : 'transparent',
                        boxShadow: hovered === 'transaction' ? buttonHoverStyle.boxShadow : '0 0 0 rgba(0,0,0,0)',
                    }}
                    onMouseEnter={() => setHovered('transaction')}
                    onMouseLeave={() => setHovered(null)}
                    onClick={handleTransaction}
                >
                    Transaction Deposit / Withdraw
                </button>
                <button
                    style={{
                        ...buttonStyle,
                        backgroundColor: hovered === 'balance' ? buttonHoverStyle.backgroundColor : 'rgb(8 80 101)',
                        color: hovered === 'balance' ? buttonHoverStyle.color : '#fff',
                        borderColor: hovered === 'balance' ? buttonHoverStyle.borderColor : 'transparent',
                        boxShadow: hovered === 'balance' ? buttonHoverStyle.boxShadow : '0 0 0 rgba(0,0,0,0)',
                    }}
                    onMouseEnter={() => setHovered('balance')}
                    onMouseLeave={() => setHovered(null)}
                    onClick={handleCheckBalance}
                >
                    Check Balance
                </button>
            </div>
        </div>
    );
};

export default LandingPage;
