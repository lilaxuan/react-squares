import './ChildBoxStyle.css';
import { useState } from 'react';


export default function ChildBox() {
    // use state management for the box color
    const [backgroundColor, setBackgroundColor] = useState('white-background');

    function changeBackgroundColor() {
        if (backgroundColor === 'white-background') {
            setBackgroundColor('black-background');
        } else {
            setBackgroundColor('white-background');
        }
    }

    return (
        <div>
            <div className={`box ${backgroundColor}`} onClick={() => changeBackgroundColor()}></div>
        </div>
    )
}