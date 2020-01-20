import React from 'react'
//import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//import InboxIcon from '@material-ui/icons/MoveToInbox';
import Soccer from '../icons/Soccer'
import Football from '../icons/Football'
import Basketball from '../icons/Basketball'
import Baseball from '../icons/Baseball'
import IceHockey from '../icons/IceHockey'
import Formula1 from '../icons/Formula1'

// const listItemStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//         "&$selected": {
//             backgroundColor: 'red'
//         }
//     },
//   }),
// );

const SideMenu = () => {
    // const listItemClasses = listItemStyles()
    return (
            <Drawer
                    variant="persistent"
                    anchor="left"
                    open={true}
                >
                
                <List component="nav" aria-label="main mailbox folders">
                    <ListItem  button selected={true}>
                        <ListItemIcon>
                            <Soccer />
                        </ListItemIcon>
                        <ListItemText primary="Soccer" />
                        {/* <ListItemIcon>
                            <InboxIcon style={{color:'red' }}/>
                        </ListItemIcon>
                        <ListItemText primary={<Typography style={{ color: 'red' }}>Inbox</Typography>} /> */}
                    </ListItem>
                    <ListItem button>
                    <ListItemIcon>
                        <Football />
                    </ListItemIcon>
                    <ListItemText primary="Football" />
                    </ListItem>
                    <ListItem button>
                    <ListItemIcon>
                        <Basketball />
                    </ListItemIcon>
                    <ListItemText primary="Basketball" />
                    </ListItem>
                    <ListItem button>
                    <ListItemIcon>
                        <IceHockey />
                    </ListItemIcon>
                    <ListItemText primary="Ice Hockey" />
                    </ListItem>
                    <ListItem button>
                    <ListItemIcon>
                        <Baseball />
                    </ListItemIcon>
                    <ListItemText primary="Baseball" />
                    </ListItem>
                    <ListItem button>
                    <ListItemIcon>
                        <Formula1 />
                    </ListItemIcon>
                    <ListItemText primary="Formula 1" />
                    </ListItem>
                </List>
                
                
            </Drawer>
    )
}

export default SideMenu
