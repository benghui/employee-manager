import { Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

export const ButtonCellRenderer = (props) => {
	let navigate = useNavigate();

	const editHandler = () => {
		navigate("/employee/edit");
	}
	return (
		<>
			<Button onClick={editHandler}>Edit</Button>
			<Button>Delete</Button>
		</>
	)
}
