import ThemeToggle from '../ThemeToggle';
import FloatingIcons from '../FloatingIcons';

const Layout = ({children}) => {
    return (
        <div className="layout">
            <FloatingIcons />
            <main>
                {children}
            </main>
            <ThemeToggle />
        </div>
    )
}   
export default Layout;
