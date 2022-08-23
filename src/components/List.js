import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import { useGetListsQuery } from "../services/listApi";


const List = () => {

	const { data, error, isLoading, isSuccess } = useGetListsQuery();

	const columnDefs = [
		{ headerName: "First Name", field: "firstName" },
		{ headerName: "Last Name", field: "lastName", },
		{ headerName: "Email Address", field: "email", },
		{ headerName: "Phone Number", field: "number" },
		{ headerName: "Gender", field: "gender" },
	]

	const onGridReady = (params) => {
		params.api.applyTransaction({ add: data })
	}

	const defaultColDef = {
		sortable: true,
		editable: true,
		flex: 1,
		filter: true,
		// floatingFilter: true
	}

	return (
		<div>
			<header>The Employee List Page</header>
			<div>
				{error && <p>An error occurred</p>}
				{isLoading && <p>Loading...</p>}
			</div>
			<div className="ag-theme-alpine" style={{ height: '400px' }}>
				{isSuccess && (
					<AgGridReact
						columnDefs={columnDefs}
						defaultColDef={defaultColDef}
						onGridReady={onGridReady}>
					</AgGridReact>
				)}
			</div>
		</div>
	);
};

export default List;