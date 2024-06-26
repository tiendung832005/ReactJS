
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/reducers/themeSlice';
import "./theme.css"
export interface ThemeState {
    theme: {
      isDarkMode: boolean;
    };
  }

export default function Theme() {
    const isDarkMode = useSelector((state: ThemeState) => state.theme.isDarkMode);
    const dispatch = useDispatch();

     const handleToggle = () => {
        dispatch(toggleTheme());
    };
  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <div className="container">
        <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
        <button onClick={handleToggle}>Toggle Theme</button>
      </div>
    </div>
  )
}