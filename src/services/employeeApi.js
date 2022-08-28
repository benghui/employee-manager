import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const employeeApi = createApi({
	reducerPath: 'employeesApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://6164f6e709a29d0017c88ed9.mockapi.io/fetest/employees' }),
	tagTypes: ['Employee'],
	endpoints: (builder) => ({
		getEmployees: builder.query({
			query: () => '/',
		}),
		getEmployee: builder.query({
			query: (employeeId) => `/${employeeId}`,
			providesTags: (result, error, arg) => [{ type: 'Employee', id: arg }],
		}),
		addNewEmployee: builder.mutation({
			query: initialEmployee => ({
				url: '',
				method: 'POST',
				body: initialEmployee
			}),
			invalidatesTags: ['Employee'],
		}),
		editEmployee: builder.mutation({
			query: (employee) => ({
				url: `/${employee.id}`,
				method: 'PATCH',
				body: employee,
			}),
			invalidatesTags: (result, error, arg) => [{ type: 'Employee', id: arg.id }],
		}),
		deleteEmployee: builder.mutation({
			query: (id) => ({
				// url: `/${id}`,
				url: ``,
				method: 'DELETE',
				credentials: 'include',
			}),
			invalidatesTags: ['Employee'],
		}),
	}),
})

export const {
	useGetEmployeesQuery,
	useGetEmployeeQuery,
	useAddNewEmployeeMutation,
	useEditEmployeeMutation,
	useDeleteEmployeeMutation
} = employeeApi
