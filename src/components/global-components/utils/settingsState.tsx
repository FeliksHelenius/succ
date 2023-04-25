import { useState } from 'react';

export const SettingsState = () => {
	let [theme, setTheme] = useState<string>('darkTheme');
	return { theme, setTheme };
};
