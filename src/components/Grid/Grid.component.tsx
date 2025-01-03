import React from "react";
import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 
import "./Grid.styles.css";

interface GridProps {
    columnDefs: any[];
    rowData: any[];
}

export const Grid: React.FC<GridProps> = ({ 
    columnDefs, 
    rowData, 
 }) => {
    ModuleRegistry.registerModules([AllCommunityModule]);

    return (
        <div style={{ height: 600 }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
            />
        </div>
    )
};