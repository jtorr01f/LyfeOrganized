import React, { useState } from "react";
import "./Tasks.styles.css";
import { Grid } from "../../components/Grid/Grid.component.tsx";
import CustomModal from "../../components/Modal/Modal.component.tsx";

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

    return (
        <div className="tasks-wrapper">
            <div>Tasks</div>
            <button onClick={onButtonClick}>Create Task</button>
            <Grid columnDefs={colDefs} rowData={rowData} />
            <CustomModal
                show={showCreateTask}
                handleClose={() => setShowCreateTask(false)}
                header="Create Task"
                body={<input value={taskValue} onChange={(e) => setTaskValue(e.target.value)} />}
                footerButtons={[
                    {
                        text: "Create",
                        variant: "primary",
                        onClick: () => {
                            const newTask = {
                                task: taskValue,
                                complete: false,
                            };
                            setRowData([...rowData, newTask]);
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
                ]}
            />
    </div>
    );
};
export default Tasks;