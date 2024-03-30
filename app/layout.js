import './globals.css';
import AuthContext from './context/AuthContext';
import ToasterContext from './context/ToasterContext';
import LayoutComponent from './components/layout/LayoutComponent';

export const metadata = {
  title: 'sneaker',
  description: 'Tempat beli sepatu terbaik.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <AuthContext>
          <ToasterContext />
          <LayoutComponent>{children}</LayoutComponent>
        </AuthContext>
      </body>
    </html>
  );
}
