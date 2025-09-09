import React, { Component } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const ResonatorButtons = () => {
        const navigate = useNavigate();
        return (
            <div className="resonator-buttons">
                <button onClick={() => navigate(props.page)}>
                    Hello
            </button>
            </div>
        )
    }

export default ResonatorButtons;