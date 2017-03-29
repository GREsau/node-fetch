
/**
 * abort-error.js
 *
 * AbortError interface for aborted fetches
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
export default function AbortError(message) {
	Error.call(this, message);

	this.message = message;

	// hide custom error implementation details from end-users
	Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';
