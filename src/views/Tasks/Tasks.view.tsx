import React, { useRef, useState } from "react";
import { useOnClickOutside } from "../../hooks.tsx";
import "./Tasks.styles.css";
import {
    CheckboxEditorModule,
    ValidationModule,
  } from "ag-grid-community";
import { Grid } from "../../components/Grid/Grid.component.tsx";
import Button from "../../components/Button/Button.component.tsx";
import Modal from "../../components/Modal/Modal.component.tsx";
import { Input } from "../../components/Input/Input.component.tsx";
import Dropdown from "../../components/Dropdown/Dropdown.component.tsx";

const ModalBody = ({ taskValue, onChange, errors, typeValue, setTypeValue  }) => {
    return (
        <div className="modal-body-wrapper">
            <div className="modal-label">Task</div>
            <Input
                id="task-input"
                variant="text"
                value={taskValue}
                onChange={onChange}
                placeholder="Task"
            />
            <div className="modal-label">Type</div>
            <Dropdown
                variant="text"
                options={["Recurring", "Single"]}
                value={typeValue}
                placeholder="Select Type"
                onClick={setTypeValue}
                useSearch
            />
            <div className="error-messages">
                {errors.map((error) => (
                    <div className="error-message">
                        {error.message}
                    </div>
                ))}
            </div>
        </div>
    )
}

const Tasks = () => {
    const [rowData, setRowData] = useState<{ task: string; status: boolean }[]>([]);
    const [taskValue, setTaskValue] = useState<string>("");
    const [typeValue, setTypeValue] = useState<string>("");
    const [taskErrors, setTaskErrors] = useState<{ errorCode: number; message: string }[]>([]);
    const [showCreateTask, setShowCreateTask] = useState<boolean>(false);
    const [quickFilterText, setQuickFilterText] = useState<string>("");

    const modalRef = useRef(null);
    useOnClickOutside(modalRef, () => setShowCreateTask(false));

    const colDefs = [
        { 
            field: "id", 
            headerName: "ID", 
            flex: 1 
        },
        { 
            field: "task", 
            flex: 1 
        },
        { 
            field: "type", 
            flex: 1 
        },
        { 
            field: "status", 
            cellRenderer: 'agCheckboxCellRenderer',
            cellEditor: 'agCheckboxCellEditor',
            flex: 1
        },
    ];

    const onButtonClick = () => {
        setShowCreateTask(true);
    }

    const footerButtons = [
        {
            id: "create-task-btn",
            text: "Create",
            variant: "primary",
            onClick: () => {
                if (taskValue !== "") {
                    const newTask = {
                        id: rowData.length + 1,
                        task: taskValue,
                        type: typeValue,
                        status: false,
                    };
                    setRowData([...rowData, newTask]);
                    setShowCreateTask(false);
                    setTaskValue("");
                    setTypeValue("");
                    setTaskErrors([]);
                } else {
                    if (taskValue === "") {
                        setTaskErrors([...taskErrors, { errorCode: 1, message: "Task cannot be empty." }]);
                    }
                    if (typeValue === "") {
                        setTaskErrors([...taskErrors, { errorCode: 2, message: "Type cannot be empty." }]);
                    }
                }
            },
        },
        {
            id: "cancel-task-btn",
            text: "Cancel",
            variant: "secondary",
            onClick: () => {
                setShowCreateTask(false);
                setTaskErrors([]);
                setTypeValue("");
                setTaskValue("");
            },
        },
    ]

    return (
        <div className="tasks-wrapper">
            <div className="tasks-header-wrapper">
                <div className="tasks-header">Tasks</div>
                <Button id="create-task-btn" text="Create Task" variant="primary" onClick={onButtonClick} />
            </div>
            <div className="search-wrapper">
                <Input
                    id="task-search"
                    variant="text"
                    value={quickFilterText}
                    onChange={(e) => setQuickFilterText(e.target.value)}
                    placeholder="Search"
                />
            </div>
            <Grid 
                columnDefs={colDefs}
                rowData={rowData}
                modules={[CheckboxEditorModule, ValidationModule]}
                quickFilterText={quickFilterText}
            />
            <Modal
                ref={modalRef}
                show={showCreateTask}
                onClose={() => setShowCreateTask(false)}
                header="Create Task"
                body={(
                    <ModalBody 
                        taskValue={taskValue} 
                        onChange={(e) => setTaskValue(e.target.value)} 
                        errors={taskErrors}
                        typeValue={typeValue}
                        setTypeValue={setTypeValue}
                    />
                )}
                footerButtons={footerButtons}
                size="sm"
            />
    </div>
    );
};
export default Tasks;