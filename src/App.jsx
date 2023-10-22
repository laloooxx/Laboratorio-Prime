import { PrimeReactProvider } from 'primereact/api';
import Footer from '../pages/Footer';
import Menu from '../pages/Menu';
import 'primereact/resources/themes/viva-light/theme.css';
import 'primeicons/primeicons.css';
import { BrowserRouter } from 'react-router-dom';    
import AppRoutes from '../routes/Route';
        

export default function App() {
    return (
        <PrimeReactProvider>
            <BrowserRouter>
                <div className="grid">
                    <div className="col-6 col-offset-3">
                        <Menu />
                    </div>
                </div>

                <div className="grid">
                    <div className="col-4">
                        <AppRoutes />
                    </div>
                    <div className="col-4 col-offset-4"></div>
                </div>
                <div className="grid">
                    <div className="col-6 col-offset-3">
                        <Footer />
                    </div>
                </div>
            </BrowserRouter>
        </PrimeReactProvider>
    );
};
        