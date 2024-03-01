import { useState } from "react";
import ChildBox from "./ChildBox";
import './ParentBoxesStyle.css';
import { LivingCellsContext } from './BoxesCountContext';


export default function ParentBoxes() {
    const [livingCellsCnt, setLivingCellsCnt] = useState(0);

    return (
        <LivingCellsContext.Provider value={{ livingCellsCnt, setLivingCellsCnt }}>
            <div>
                <div className="count-display">Count {livingCellsCnt}</div>
                <div className="grid-container">
                    <ChildBox />
                    <ChildBox />
                    <ChildBox />
                    <ChildBox />
                </div>
            </div>
        </LivingCellsContext.Provider>
    )
}