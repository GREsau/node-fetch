
import FetchSignal, { ABORT } from './fetch-signal';

const SIGNAL = Symbol('signal');

export default class FetchController {
	constructor() {
		this[SIGNAL] = new FetchSignal();
	}
	
	get signal() {
		return this[SIGNAL];
	}

	abort() {
		this[SIGNAL][ABORT]();
	}
}
