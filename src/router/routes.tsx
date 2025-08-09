
import MainLayout from '../layout/MainLayout';

// Public pages
import HomePage from '../pages/home'
import AboutPage from '../pages/about'
import Posts from '../pages/posts';
import CreatePost from '../pages/posts/add-post';

// Private dashboard pages
import ProfilePage from '../pages/common/ProfilePage';
import SettingsPage from '../pages/common/SettingsPage';

import type { RouteObject } from 'react-router-dom';

export const routes : RouteObject[] = [
    // Public Routes
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'about', element: <AboutPage /> },
            { path: 'posts', element: <Posts /> },
            { path: 'posts/add', element: <CreatePost /> },
            { path: 'settings', element: <SettingsPage /> },
            { path: 'profile', element: <ProfilePage /> },
        ]
    },
];