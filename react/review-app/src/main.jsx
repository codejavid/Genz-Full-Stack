import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import { FeedbackProvider } from './context/FeedbackContext.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
    <FeedbackProvider>
        <ThemeProvider>
            <App />
       </ThemeProvider>
    </FeedbackProvider>
    
)
