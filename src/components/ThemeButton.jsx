export default function ThemeButton ({darkMode, setDarkMode}) {
    return(       
        <button
            className="toggle-btn"
            onClick={() => setDarkMode(!darkMode)}
            title="تبديل الوضع"
        >
            {darkMode ? '☀️' : '🌙'}
        </button>
    )
}