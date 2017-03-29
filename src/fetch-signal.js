
import EventEmitter from 'events';

export const ABORT = Symbol('abort');
const ABORTED = Symbol('aborted');

export default class FetchSignal extends EventEmitter {
	constructor() {
		super();
		this[ABORTED] = false;
	}

	[ABORT]() {
		if (!this[ABORTED]) {
			this[ABORTED] = true;
			this.emit('abort');
		}
	}

	get aborted() {
		return this[ABORTED];
	}
}
