import path from 'path'

export default function (moduleOptions) {
	const options = Object.assign({}, this.options.appwrite, moduleOptions)

	if (!options.endpoint)
		throw new Error(`(nuxt-appwrite) Please provide your API Endpoint.`)

	if (!options.project_id)
		throw new Error(`(nuxt-appwrite) Please provide your Project ID.`)

	this.addPlugin({
		src: path.resolve(__dirname, 'plugin.js'),
		options,
	})
}

module.exports.meta = require('../package.json')
