import { Appwrite } from 'appwrite'

interface AppwriteConfig {
	endpoint?: string
	project_id: string
}

declare module '@nuxt/types/config/index' {
	interface NuxtOptions {
		appwrite: AppwriteConfig
	}
}

declare module '@nuxt/vue-app' {
	interface Context {
		$appwrite: Appwrite
	}
}

declare module '@nuxt/types' {
	interface Context {
		$appwrite: Appwrite
	}
}

declare module 'vue/types/vue' {
	interface Vue {
		$appwrite: Appwrite
	}
}

declare module 'vuex/types/index' {
	interface Store<S> {
		$appwrite: Appwrite
	}
}
