import { Button, Grid } from "@mui/material";

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import { useNavigate } from "react-router-dom";

import { useGetListsQuery } from "../services/listApi";
import { ButtonCellRenderer } from './ButtonCellRenderer';


const List = () => {
	let navigate = useNavigate();

	const { data, error, isLoading, isSuccess } = useGetListsQuery();

	const columnDefs = [
		{ headerName: "First Name", field: "firstName", },
		{ headerName: "Last Name", field: "lastName", },
		{ headerName: "Email Address", field: "email", },
		{ headerName: "Phone Number", field: "number", },
		{ headerName: "Gender", field: "gender", },
		{ maxWidth: 200, cellRenderer: ButtonCellRenderer, pinned: "right" }
	]

	const onGridReady = (params) => {
		params.api.applyTransaction({ add: data })
	}

	const defaultColDef = {
		sortable: true,
		editable: true,
		flex: 1,
		filter: true,
	}

	const gridOptions = {
		domLayout: 'autoHeight',
	}

	const addEmployeeHandler = () => {
		navigate("/employee/add");
	}

	return (
		<div>
			<Grid align="right">
				<Button onClick={addEmployeeHandler}>Add Employee</Button>
			</Grid>
			<div>
				{error && <p>An error occurred</p>}
				{isLoading && <p>Loading...</p>}
			</div>
			<div className="ag-theme-alpine" style={{ height: '400px' }}>
				{isSuccess && (
					<AgGridReact
						columnDefs={columnDefs}
						defaultColDef={defaultColDef}
						gridOptions={gridOptions}
						onGridReady={onGridReady}>
					</AgGridReact>
				)}
			</div>
		</div>
	);
};

export default List;
