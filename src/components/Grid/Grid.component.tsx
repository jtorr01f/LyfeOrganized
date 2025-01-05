import React, {FC} from "react";
import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 
import "./Grid.styles.css";

interface GridProps {
    columnDefs: any[];
    rowData: any[];
    modules: any[];
    quickFilterText: string;
}

export const Grid: FC<GridProps> = ({ 
    columnDefs, 
    rowData, 
    modules,
    quickFilterText
 }) => {
    ModuleRegistry.registerModules([
        AllCommunityModule, 
        ...modules,
    ]);

    return (
        <div style={{ height: 600 }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                quickFilterText={quickFilterText}
            />
        </div>
    )
};