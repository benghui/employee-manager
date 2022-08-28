import { Form, Field } from 'react-final-form'
import { useAddNewEmployeeMutation } from '../services/employeeApi';
import { useNavigate } from 'react-router-dom';

const Add = () => {
	let navigate = useNavigate();

	const [addNew] = useAddNewEmployeeMutation();

	const required = value => (value ? undefined : 'Required')
	const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined)
	const composeValidators = (...validators) => value =>
		validators.reduce((error, validator) => error || validator(value), undefined)

	const onSubmit = async values => {
		try {
			await addNew(values).unwrap()
			navigate("/employee/list");
		} catch (err) {
			navigate("/employee/list");
			console.error("Failed to save employee", err)
		}
	}

	return (
		<Form
			onSubmit={onSubmit}
			render={({ handleSubmit, form, submitting, pristine, values }) => (
				<form onSubmit={handleSubmit}>
					<Field name="firstName" validate={required}>
						{({ input, meta }) => (
							<div>
								<label>First Name</label>
								<input {...input} type="text" placeholder="First Name" />
								{meta.error && meta.touched && <span>{meta.error}</span>}
							</div>
						)}
					</Field>
					<Field name="lastName" validate={required}>
						{({ input, meta }) => (
							<div>
								<label>Last Name</label>
								<input {...input} type="text" placeholder="Last Name" />
								{meta.error && meta.touched && <span>{meta.error}</span>}
							</div>
						)}
					</Field>
					<Field
						name="email"
						validate={required}
					>
						{({ input, meta }) => (
							<div>
								<label>Email</label>
								<input {...input} type="text" placeholder="Email" />
								{meta.error && meta.touched && <span>{meta.error}</span>}
							</div>
						)}
					</Field>
					<Field
						name="number"
						validate={composeValidators(required, mustBeNumber)}
					>
						{({ input, meta }) => (
							<div>
								<label>Phone</label>
								<input {...input} type="text" placeholder="Phone" />
								{meta.error && meta.touched && <span>{meta.error}</span>}
							</div>
						)}
					</Field>
					<div>
						<label>Gender</label>
						<div>
							<label>
								<Field
									name="gender"
									component="input"
									type="radio"
									value="male"
								/>{' '}
								Male
							</label>
							<label>
								<Field
									name="gender"
									component="input"
									type="radio"
									value="female"
								/>{' '}
								Female
							</label>
						</div>
					</div>
					<div className="buttons">
						<button type="submit" disabled={submitting || pristine}>
							Submit
						</button>
					</div>
				</form>
			)}
		/>
	)
}

export default Add;
