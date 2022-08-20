import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const listApi = createApi({
	reducerPath: 'listsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://6164f6e709a29d0017c88ed9.mockapi.io/fetest/employees' }),
	tagTypes: ['List'],
	endpoints: (builder) => ({
		getLists: builder.query({
			query: () => '/',
		}),
	}),
})

export const { useGetListsQuery } = listApi
