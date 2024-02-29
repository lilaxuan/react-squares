import './ChildBoxStyle.css';
import { useState } from 'react';
import { useLivingCells } from './BoxesCountContext';

export default function ChildBox(props) {
    // use state management for the box color
    const [backgroundColor, setBackgroundColor] = useState('white-background');
    const { livingCellsCnt, setLivingCellsCnt } = useLivingCells();

    function changeBackgroundColor() {
        if (backgroundColor === 'white-background') {
            setBackgroundColor('black-background');
            setLivingCellsCnt(livingCellsCnt + 1);
        } else {
            setBackgroundColor('white-background');
            setLivingCellsCnt(livingCellsCnt - 1);
        }
    }

    // receive the props from the parent
    const boxClassName = props.boxClassName;

    return (
        <div>
            <div className={`${boxClassName} ${backgroundColor}`} onClick={changeBackgroundColor}></div>
        </div>
    )
}