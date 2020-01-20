import React, { useEffect } from 'react'
//import axios from 'axios'
import { useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'
import PanelTitle from './PanelTitle'
import SideMenu from './SideMenu'
import Navbar from './Navbar'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Soccer from '../icons/Soccer'
import Football from '../icons/Football'
import TestTable from './TestTable'
import TestTabs from './TestTabs'
import ReduxTest from './ReduxTest'

// const testy = async (updateData: (data: any) => void): Promise<void> => {
//   // const team = await axios.get(`${process.env.REACT_APP_SPORT_DB}/eventsround.php?id=4328&r=17&s=1920`)
//   const team = await axios.get(
//     `https://api-football-v1.p.rapidapi.com/v2/leagueTable/524`,
//     {
//       headers: {
//         'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
//         'X-RapidAPI-Key': '8a017e8d38msh65a761b2d05f4dbp14997djsn2202fd576cb2',
//       },
//     },
//   )
//   // https://api-football-v1.p.rapidapi.com/v2/predictions/15746
//   console.log(team)
//   updateData(team.data.api.standings[0])
// }

interface TestProps {
  message?: string
  hello?: string
}
interface Articles {
  articles: []
  isLoadingArticles: boolean
}

const Test = ({ message }: TestProps) => {
  //const [data, updateData] = useState([])
  const result: any = useSelector(({ articles }: Articles): unknown => articles)

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    //testy(updateData)
  }, [])
  console.log(result)
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <SideMenu />
        <div style={{ margin: '16px', width: 'calc(100vw - 300px)' }}>
          <TestTabs />
          <PanelTitle variant="h6">Integrations</PanelTitle>
          <Button variant="contained" color="primary">
            {message}
          </Button>
          <Button variant="contained" color="secondary">
            {message}
          </Button>
          <ReduxTest />
          <div style={{ position: 'relative' }}>
            <Soccer />
            <Football />
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              color="primary"
              onClick={handleClick}
            >
              Open Menu
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
          <TestTable />
        </div>
      </div>
    </div>
  )
}

export default Test
