# @nuxtclub/appwrite

## Setup

1. Add `@nuxtclub/appwrite` dependency to your project

```bash
yarn add @nuxtclub/appwrite # or npm i @nuxtclub/appwrite
```

2. Add `@nuxtclub/appwrite` to the `modules` section of `nuxt.config.js`

```javascript
export default {
	modules: [
		[
			'@nuxtclub/appwrite',
			{
				/* module options */
			},
		],
	],
}
```

## Using top level options

```javascript
export default {
	modules: ['@nuxtclub/appwrite'],
	appwrite: {
		/* module options */
	},
}
```

# Typescript support

Add the types to your `"types"` array in `tsconfig.json` after the `@nuxt/types` entry.

:warning: Use `@nuxt/vue-app` instead of `@nuxt/types` for nuxt < 2.9.

```json
{
	"compilerOptions": {
		"types": ["@nuxt/types", "@nuxtclub/appwrite"]
	}
}
```

## Configuration

To start using Appwrite in your project you should place the Project ID and the API Endpoint of your Appwrite project.

You can find this data on the administration panel of your project > Settings.

```javascript
export default {
	appwrite: {
		project_id: 'YOUR_PROJECT_ID',
		endpoint: 'YOUR_API_ENDPOINT',
	},
}
```

## Usage

This module will inject $Appwrite in the context of your application.

Using $Appwrite you can access to the Appwrite object of the [Appwrite Client for JavaScript](https://appwrite.io/docs/getting-started-for-web).

Learn more about Appwrite [here](https://appwrite.io/docs).
