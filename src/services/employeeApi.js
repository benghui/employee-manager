import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const employeeApi = createApi({
	reducerPath: 'employeesApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://6164f6e709a29d0017c88ed9.mockapi.io/fetest/employees' }),
	tagTypes: ['Employee'],
	endpoints: (builder) => ({
		getEmployees: builder.query({
			query: () => '/',
		}),
		addNewEmployee: builder.mutation({
			query: initialEmployee => ({
				url: '',
				method: 'POST',
				body: initialEmployee
			})
		})
	}),
})

export const {
	useGetEmployeesQuery,
	useAddNewEmployeeMutation
} = employeeApi
