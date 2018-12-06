import * as sapper from '../__sapper__/client.js';
import { Store } from 'svelte/store.js';

sapper.start({
	target: document.querySelector('#sapper'),
	store: data => {
		const store = new Store(data)
		// for debug
		window.store = store

		return store
	}
});