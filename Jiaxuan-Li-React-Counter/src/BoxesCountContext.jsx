import React, { createContext, useContext } from 'react';

// Create Context
const LivingCellsContext = createContext();

// Custom hook to use the context
export function useLivingCells() {
    return useContext(LivingCellsContext);
}

export { LivingCellsContext };