import { SettingsState } from './utils/settingsState';

export const Settings = () => {
	let theme = SettingsState();

	return (
		<div id="settings">
			<div className="theme-selector">
				<button
					className="darkTheme"
					onClick={() => {
						theme.setTheme('darkTheme');
					}}></button>
				<button
					className="lightTheme"
					onClick={() => {
						theme.setTheme('lightTheme');
					}}></button>
			</div>
			<div className="username"></div>
			<div className="password"></div>
		</div>
	);
};
