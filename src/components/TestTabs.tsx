import React from 'react'
//import { makeStyles, Theme } from '@material-ui/core/styles';
import LeagueTable from './LeagueTable'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Soccer from '../icons/Soccer'

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  )
}

function a11yProps(index: any) {
  return {
    'id': `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

// const useStyles = makeStyles((theme: Theme) => ({
//   root: {
//     padding: '16px',
//     flexGrow: 1,
//     borderRadius: '8px',
//     backgroundColor: theme.palette.background.paper,
//     boxShadow: "rgba(12, 52, 75, 0.05) 0px 3px 3px",
//   },
// }));

export default function SimpleTabs() {
  //const classes = useStyles();
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Card style={{ padding: '8px 16px', marginTop: '32px' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        indicatorColor="primary"
      >
        <Tab label="Premier League" {...a11yProps(0)} />
        <Tab
          label={
            <ListItem>
              <ListItemIcon>
                <Soccer />
              </ListItemIcon>
              <ListItemText primary="Soccer" />
            </ListItem>
          }
          {...a11yProps(1)}
        />
        <Tab label="Item Three" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <LeagueTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Card>
  )
}
