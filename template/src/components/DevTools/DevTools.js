import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
    AppBar,
    Box,
    Divider,
    Fab,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    ListSubheader,
    Menu,
    MenuItem,
    SwipeableDrawer,
    Switch,
    Toolbar,
    Typography
} from '@material-ui/core';
import BugReportIcon from '@material-ui/icons/BugReport';
import LanguageDropdown from '../common/LanguageDropdown/LanguageDropdown';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import MenuIcon from '@material-ui/icons/Menu';
import HelpIcon from '@material-ui/icons/Help';
import CloudIcon from '@material-ui/icons/Cloud';
import CloudOffIcon from '@material-ui/icons/CloudOff';
import LanguageIcon from '@material-ui/icons/Language';
import BuildIcon from '@material-ui/icons/Build';
// import CropFreeIcon from '@material-ui/icons/CropFree';
// import QrReader from "../QrReader/QrReader";
import APP_SETTINGS from "../../config/settings";
import SETTINGS from "../../config/settings";


const DevTools = ({showTopBar, onChange, formData, navigateHandler, currentPath, currentLanguage, changeLanguageHandler, showLanguage, fabBtnTitle}) => {

    // const [qrReaderOpen, setQrReaderOpen] = useState(false);
    const [menuAnchorEl, setMenuAnchorEl] = useState();

    if (APP_SETTINGS.app.ENV !== 'DEV') {
        return null;
    }

    const {open, debug, mode} = formData;

    return (
        <>
            {showTopBar && (
                <AppBar position='static'>
                    <Toolbar>
                        <IconButton onClick={() => onChange({open: true})} edge="start" color="inherit" aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6">
                            DevTools
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: 'flex'}}>
                            <IconButton
                                size="medium"
                                onClick={e => setMenuAnchorEl(e.currentTarget)}
                            >
                                <LanguageIcon color={'secondary'}/>
                            </IconButton>
                            <Menu
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                anchorEl={menuAnchorEl}
                                open={Boolean(menuAnchorEl)}
                                onClose={() => setMenuAnchorEl(null)}
                                keepMounted
                            >
                                <MenuItem selected={currentLanguage === 'en'} onClick={() => changeLanguageHandler('en')}>EN</MenuItem>
                                <MenuItem selected={currentLanguage === 'pt'} onClick={() => changeLanguageHandler('pt')}>PT</MenuItem>
                            </Menu>
                        </Box>
                        {/*<div style={{position: 'absolute', right: '10px'}}>
                            <LanguageDropdown isOnDark={true}/>
                        </div>*/}
                    </Toolbar>
                </AppBar>
            )}
            {!open && !showTopBar && (
                <Fab style={{position: 'fixed', bottom: '10px', left: '10px'}}
                     size={'small'}
                     variant={"extended"}
                     color="primary"
                     aria-label="open-dev-tools"
                     onClick={() => onChange({open: true})}>
                    <BuildIcon/>
                    {fabBtnTitle}
                </Fab>
            )}
            <SwipeableDrawer
                style={{minWidth: '280px'}}
                anchor={'left'}
                open={open}
                onClose={() => onChange({open: false})}
                onOpen={() => onChange({open: true})}>
                <div style={{minWidth: '280px'}}>
                    <Divider/>
                    {showLanguage && (
                        <List subheader={<ListSubheader><b>Language</b></ListSubheader>}>
                            <ListItem>
                                <ListItemIcon><LanguageIcon/></ListItemIcon>
                                <ListItemText primary={'Current'}/>
                                <ListItemSecondaryAction>
                                    <LanguageDropdown
                                        value={currentLanguage}
                                        onChange={changeLanguageHandler}
                                    />
                                </ListItemSecondaryAction>
                            </ListItem>
                        </List>
                    )}
                    <Divider/>
                    <List subheader={<ListSubheader><b>Source</b></ListSubheader>}>
                        <ListItem
                            disabled={mode === SETTINGS.app.MODES.MOCK}
                            onClick={() => onChange({mode: SETTINGS.app.MODES.MOCK})}
                            button>
                            <ListItemIcon><CloudOffIcon/></ListItemIcon>
                            <ListItemText primary={'MOCK'}/>
                        </ListItem>
                        <ListItem
                            disabled={mode === SETTINGS.app.MODES.API}
                            onClick={() => onChange({mode: SETTINGS.app.MODES.API})}
                            button>
                            <ListItemIcon><CloudIcon/></ListItemIcon>
                            <ListItemText primary={'API'}/>
                        </ListItem>
                    </List>
                    <Divider/>
                    <List subheader={<ListSubheader><b>Mode</b></ListSubheader>}>
                        <ListItem>
                            <ListItemIcon>
                                <BugReportIcon/>
                            </ListItemIcon>
                            <ListItemText primary={'Debug'}/>
                            <ListItemSecondaryAction>
                                <Switch checked={debug}
                                        onChange={(e, checked) => onChange({debug: checked})}/>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                    <Divider/>
                    <List subheader={<ListSubheader><b>Links</b></ListSubheader>}>
                        <ListItem>
                            <ListItemIcon>
                                <HelpIcon/>
                            </ListItemIcon>
                            <ListItemText primary={'Home'}/>
                            <ListItemSecondaryAction>
                                <IconButton onClick={() => {
                                    navigateHandler('/');
                                    onChange({open: false});
                                }}>
                                    <KeyboardArrowRightIcon/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                    <Divider/>
                    {/*<List subheader={<ListSubheader><b>QrReader</b></ListSubheader>}>
                        <ListItem>
                            <ListItemIcon>
                                <CropFreeIcon/>
                            </ListItemIcon>
                            <ListItemText primary={'Open'}/>
                            <ListItemSecondaryAction>
                                <Switch checked={qrReaderOpen}
                                        onChange={(e, checked) => setQrReaderOpen(checked)}/>
                            </ListItemSecondaryAction>
                        </ListItem>
                        {qrReaderOpen && <QrReader/>}
                    </List>*/}
                </div>
            </SwipeableDrawer>
        </>
    );
};

DevTools.propTypes = {
    showOnTop: PropTypes.bool,
    onChange: PropTypes.func,
    currentLanguage: PropTypes.string,
    changeLanguageHandler: PropTypes.func,
    currentPath: PropTypes.string,
    navigateHandler: PropTypes.func,
    formData: PropTypes.shape({
        open: PropTypes.bool,
        debug: PropTypes.bool,
        mode: PropTypes.oneOf(Object.values(SETTINGS.app.MODES)),
    }),
    showLanguage: PropTypes.bool,
    fabBtnTitle: PropTypes.string,
}

DevTools.defaultProps = {
    showOnTop: false,
    onChange: () => null,
    currentLanguage: null,
    changeLanguageHandler: () => null,
    currentPath: '',
    navigateHandler: () => null,
    formData: {},
    showLanguage: true,
    fabBtnTitle: '',
};

export default DevTools;
