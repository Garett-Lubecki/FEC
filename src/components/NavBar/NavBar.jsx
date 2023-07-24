import './NavBar.css'
import NavHeader from './NavHeader'
import NavList from './NavList'
import NavRoutes from './NavRoutes'
import SaleComponent from './SaleComponent'
import MensComponent from './MensComponent'
import WomensComponent from './WomensComponent'
import KidsComponent from './KidsComponent'
import FootwearComponent from './FootwearComponent'
import BagsGearComponent from './BagsGearComponent'
import AboutUsComponent from './AboutUsComponent'

const NavBar = () => {
    return (
        <>
        <NavList />
        <NavHeader />
        <NavRoutes />
        {/* <SaleComponent /> */}
        {/* <MensComponent /> */}
        {/* <WomensComponent /> */}
        {/* <KidsComponent/> */}
        {/* <FootwearComponent /> */}
        {/* <BagsGearComponent /> */}
        {/* <AboutUsComponent /> */}
        </>
    )
}

export default NavBar