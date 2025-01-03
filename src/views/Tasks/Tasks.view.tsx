import React, { useState } from "react";
import "./Tasks.styles.css";
import { Grid } from "../../components/Grid/Grid.component.tsx";
import CustomModal from "../../components/Modal/Modal.component.tsx";
import Button from "../../components/Button/Button.component.tsx";

const ModalBody = ({ value, onChange}) => {
    return (
        <div>
            <p>task name</p>
            <input type="text" value={value} onChange={onChange} placeholder="Task Name" />
        </div>
    );
}

const Tasks = () => {
    const [rowData, setRowData] = useState<{ task: string; complete: boolean }[]>([]);
    const [taskValue, setTaskValue] = useState<string>("");
    const [showCreateTask, setShowCreateTask] = useState<boolean>(false);

    const colDefs = [
        { field: "task", flex: 1 },
        { field: "complete", flex: 1 },
    ];

    const onButtonClick = () => {
        setShowCreateTask(true);
    }

    const footerButtons = [
        {
            text: "Create",
            variant: "primary",
            onClick: () => {
                const newTask = {
                    task: taskValue,
                    complete: false,
                };
                setRowData([...rowData, newTask]);
                setShowCreateTask(false);
                setTaskValue("");
            },
        },
        {
            text: "Cancel",
            variant: "secondary",
            onClick: () => {
                setShowCreateTask(false)
                setTaskValue("");
            },
        },
    ]

    return (
        <div className="tasks-wrapper">
            <div className="tasks-header-wrapper">
                <div className="tasks-header">Tasks</div>
                <Button key="create-task-btn" text="Create Task" variant="primary" onClick={onButtonClick} />
            </div>

            <Grid columnDefs={colDefs} rowData={rowData} />
            <CustomModal
                show={showCreateTask}
                handleClose={() => setShowCreateTask(false)}
                header="Create Task"
                body={(<ModalBody value={taskValue} onChange={(e) => setTaskValue(e.target.value)} />)}
                footerButtons={footerButtons}
            />
    </div>
    );
};
export default Tasks;