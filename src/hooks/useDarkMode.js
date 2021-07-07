import React, { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';
const darkModeOn = 'false';
const UseDarkMode = () => {
	const [darkMode, setDarkMode] = useLocalStorage(darkModeOn);
	return [darkMode, setDarkMode];
};
export default UseDarkMode;
