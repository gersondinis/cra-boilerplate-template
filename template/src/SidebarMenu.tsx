import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import {SidebarLink} from 'layout/main-layout/SidebarLink';
import {ROUTE} from 'types/routes.enum';

export const SidebarMenu = () => (
  <>
    <SidebarLink path={ROUTE.HOME} text={'Home'} icon={<HomeIcon/>} exact />
    <SidebarLink path={ROUTE.ABOUT} text={'About'} icon={<InfoIcon/>} exact />
  </>
);

export default SidebarMenu;
