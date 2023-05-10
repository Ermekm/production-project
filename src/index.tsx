import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import App from './app/App';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import './shared/config/i18n/i18n';
import './app/styles/index.scss';
import { StoreProvier } from 'app/providers/StoreProvier';

render(
    <StoreProvier>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvier>,
    document.getElementById('root'),
);
