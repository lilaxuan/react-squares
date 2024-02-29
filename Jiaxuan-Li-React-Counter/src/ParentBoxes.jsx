import { useState } from "react";
import ChildBox from "./ChildBox";
import './ParentBoxesStyle.css';
import { LivingCellsContext } from './BoxesCountContext';


export default function ParentBoxes() {
    const [livingCellsCnt, setLivingCellsCnt] = useState(0);
    const boxClassName = 'box';

    return (
        <LivingCellsContext.Provider value={{ livingCellsCnt, setLivingCellsCnt }}>
            <div>
                <div>Count {livingCellsCnt}</div>
                <div className="grid-container">
                    <ChildBox boxClassName={boxClassName} />
                    <ChildBox boxClassName={boxClassName} />
                    <ChildBox boxClassName={boxClassName} />
                    <ChildBox boxClassName={boxClassName} />
                </div>
            </div>
        </LivingCellsContext.Provider>
    )
}