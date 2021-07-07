import path from 'path'

export default function (moduleOptions) {
	const options = Object.assign({}, this.options.appwrite, moduleOptions)

	if (!options.project_id)
		throw new Error(`(nuxt-appwrite) Please provide a Project ID.`)

	this.addPlugin({
		src: path.resolve(__dirname, 'plugin.js'),
		options,
	})
}

module.exports.meta = require('../package.json')
