import validator from 'validator';

const nameError = 'Must contain from 3 to 30 letters or digits.';
const sameNamesError = 'You can\'t pay to yourself.';
const amountError = 'Must be a positive number with up to 2 digits after "."';

export function checkName(name) {
	if (validator.isAlphanumeric(name)
		&& name.length >= 3
		&& name.length <= 30
	) {
		return '';
	}
	return nameError;
}

export function compareNames(ownerName, agentName) {
	if (ownerName === agentName) return sameNamesError;
	return '';
}

export function checkAmount(amount) {
	if (validator.isDecimal(amount, { decimal_digits: '0,2' }) && amount > 0) {
		return '';
	}
	return amountError;
}
