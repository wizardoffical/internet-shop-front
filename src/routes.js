import { 
    ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, 
    LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE,
    POD_SYSTEMS_ROUTE, JIDKOSTI_ROUTE, TOVARI_DLYA_KALYANA_ROUTE, ODNORAZOVIE_PODI_ROUTE, 
    PODS_ACCESSORIES_ROUTE, VAPORIZERS_ROUTE, CARTRIDGES_ROUTE, CONTACTS_ROUTE } from "./utils/consts"
import Admin from './pages/Admin/Admin'
import Basket from './pages/Basket/Basket'
import Shop from './pages/Shop/Shop'
import Auth from './pages/Auth/Auth'
import DevicePage from './pages/DevicePage/DevicePage'
import Contacts from "./pages/Contacts/Contacts"

import KalyanTovari from './pages/Catalog/KalyanTovari/KalyanTovari/KalyanTovari'
import Jidkosti from './pages/Catalog/Jidkosti/Jidkosti/Jidkosti'
import PodSystems from './pages/Catalog/Pod-systems/PodSystems/PodSystems'
import Cartridges from './pages/Catalog/Pod-systems/Cartridges/Cartridges'
import OdnorazoviePodi from './pages/Catalog/Pod-systems/OdnorazoviePodi/OdnorazoviePodi'
import Vaporizers from "./pages/Catalog/Pod-systems/Vaporizers/Vaporizers"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin, 
    },
    {
        path: BASKET_ROUTE,
        Component: Basket,
    },
    
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop,
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth,
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth,
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage,
    }, 
    {
        path: CONTACTS_ROUTE,
        Component: Contacts,
    },
    {
        path: TOVARI_DLYA_KALYANA_ROUTE,
        Component: KalyanTovari,
    },
    {
        path: JIDKOSTI_ROUTE,
        Component: Jidkosti,
    },
    {
        path: POD_SYSTEMS_ROUTE,
        Component: PodSystems,
    },
    {
        path: ODNORAZOVIE_PODI_ROUTE,
        Component: OdnorazoviePodi,
    },
    {
        path: CARTRIDGES_ROUTE,
        Component: Cartridges,
    },
    {
        path: VAPORIZERS_ROUTE,
        Component: Vaporizers,
    }
]