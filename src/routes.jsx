import { DashboardPage } from "./dashboard"

const router = [
    {path: '/auth', element: <Auth/>},
    {path: '/*', element: <DashboardPage/>},
    
]

export default routes