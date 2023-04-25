import { SettingsState } from './settingsState';

export default function Theme() {
	let theme = SettingsState();
	const darkTheme = new Map<string, string>([
		['primary', '#161616'],
		['secondary', '#7A7A7A'],
		['accent', '#00C896'],
		['dark', '#202020'],
	]);
	const oledTheme = new Map<string, string>([
		['primary', '#131313'],
		['secondary', '#232323'],
		['accent', '#131313'],
		['dark', '#000000'],
	]);

	if (theme.theme == 'darkTheme') {
		return darkTheme;
	} else if (theme.theme == 'oledTheme') {
		return oledTheme;
	}
}
