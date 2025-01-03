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
        <div
            // define a height because the Data Grid will fill the size of the parent container
            style={{ height: 500 }}
        >
            <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
            />
        </div>
    )
};