import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function useHeaderLogic() {
    const [isActive, setIsActive] = useState<string>('');
    const location = useLocation();

    useEffect(() => {
        const currentMenu = menuItems.find((menu) => location.pathname == menu.to);
        if (currentMenu) {
            setIsActive(currentMenu.name);
            localStorage.setItem('menu', currentMenu.name);
        } else {
            setIsActive('');
        }
    }, [location.pathname]);

    const handleClickMenu = (menu: string): void => {
        setIsActive(menu);
        localStorage.setItem('menu', menu);
    };

    const menuItems = [
        { name: 'Home', to: '/' },
        { name: 'All', to: '/recipes/all' },
        { name: 'Popular', to: '/recipes/popular' },
        { name: 'Recommended', to: '/recipes/recommended' },
        { name: 'Search', to: '/recipes/search' },
    ];

    return { handleClickMenu, isActive, menuItems };
}
