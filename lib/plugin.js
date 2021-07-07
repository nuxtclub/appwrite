import { Appwrite } from 'appwrite'

export default (_, inject) => {
	const appwrite = new Appwrite()

	appwrite
		.setEndpoint('<%= options.endpoint %>')
		.setProject('<%= options.project_id %>')

	inject('appwrite', appwrite)
}
