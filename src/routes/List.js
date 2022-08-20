import { useGetListsQuery } from "../services/listApi";

const List = () => {

	const { data, error, isLoading, isSuccess } = useGetListsQuery();

	return (
		<div>
			<header>The Employee List Page</header>
			<div>
				{error && <p>An error occurred</p>}
				{isLoading && <p>Loading...</p>}
			</div>
			{isSuccess && (
				<ul>
					{data.map(employee => {
						return (
							<li key={employee.id}>
								{employee.firstName} - {employee.number}
							</li>
						)
					})}
				</ul>
			)}
		</div>
	);
};

export default List;