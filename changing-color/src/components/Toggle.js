import React, { useState } from 'react';

const blue = '#2222FF';
const yellow = '#FFD712';

export function Toggle (){
    const [color, setColor] = useState(blue);

    changeColor = () => {
        const newColor = prevColor == blue ? yellow : blue;
        setColor(newColor);
    }

        return(
            <div style={{background:prevColor}}>
                <h1>
                    Change Mr.Oscar's Mood
                </h1>
                <button className = 'btn' onClick={toggle.changeColor}>
                    Change Mood
                </button>
                {prevColor == blue? <h2>I am Sad</h2> : <h2>I am Happy</h2>}
            </div>
        );
    }
