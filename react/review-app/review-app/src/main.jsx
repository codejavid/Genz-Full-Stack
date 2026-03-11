import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import { FeedbackProvider } from './context/FeedbackContext.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    <FeedbackProvider>
        <ThemeProvider>
            <BrowserRouter>
            <App />
            </BrowserRouter>
            
       </ThemeProvider>
    </FeedbackProvider>
    
)
