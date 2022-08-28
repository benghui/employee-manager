import { Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { useDeleteEmployeeMutation } from "../services/employeeApi";

export const ButtonCellRenderer = ({ data }) => {
	let navigate = useNavigate();

	const [deleteEmployee] = useDeleteEmployeeMutation()

	return (
		<>
			<Button onClick={() => navigate("/employee/edit", { state: { id: data.id } })}>Edit</Button>
			<Button onClick={() => deleteEmployee(data.id)}>Delete</Button>
		</>
	)
}
