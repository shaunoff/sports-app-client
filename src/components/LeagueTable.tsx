import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'

interface Props {
  result: string
}
const useStyles = makeStyles({
  container: {
    marginTop: '16px',
    width: '50%',
  },
  table: {
    minWidth: 650,
  },
  numberColumn: {
    width: '7%',
    height: '28px',
  },
  // teamColumn: {
  //     height: '30px',
  //     display: 'flex',
  //     alignItems: 'center',
  // },
  avatar: {
    width: '25px',
    height: '25px',
    marginRight: '20px',
  },
})

const avatarStyles = makeStyles({
  formAvatar: {
    width: '20px',
    height: '20px',
    marginRight: '4px',
    fontSize: '10px',
    backgroundColor: (props: Props): string => {
      const colors: Record<string, string> = {
        W: 'rgb(21, 189, 118)',
        D: 'rgb(143, 166, 178)',
        L: '#e94436',
      }
      return colors[props.result]
    },
  },
})

const FormAvatar = (props: Props) => {
  const classes = avatarStyles(props)
  return <Avatar className={classes.formAvatar}>{props.result}</Avatar>
}

export default function LeagueTable(props: any): ReactElement<any> {
  const result: any = useSelector((state: any) => state.articles.league)
  const classes = useStyles()
  console.log('kkkk', result)
  return (
    <div>
      <TableContainer component={Paper} className={classes.container}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.numberColumn} align="center">
                Pos.
              </TableCell>
              <TableCell>Team</TableCell>
              <TableCell className={classes.numberColumn} align="center">
                P
              </TableCell>
              <TableCell className={classes.numberColumn} align="center">
                W
              </TableCell>
              <TableCell className={classes.numberColumn} align="center">
                D
              </TableCell>
              <TableCell className={classes.numberColumn} align="center">
                L
              </TableCell>
              <TableCell className={classes.numberColumn} align="center">
                GD
              </TableCell>
              <TableCell>Form</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {result.map((row: any) => (
              <TableRow>
                <TableCell align="center">{row.rank}</TableCell>

                <TableCell>
                  <div style={{ display: 'flex' }}>
                    <Avatar
                      alt="Remy Sharp"
                      src={row.logo}
                      className={classes.avatar}
                    />
                    {row.teamName}
                  </div>
                </TableCell>
                <TableCell className={classes.numberColumn} align="center">
                  {row.all.matchsPlayed}
                </TableCell>
                <TableCell className={classes.numberColumn} align="center">
                  {row.all.win}
                </TableCell>
                <TableCell className={classes.numberColumn} align="center">
                  {row.all.draw}
                </TableCell>
                <TableCell className={classes.numberColumn} align="center">
                  {row.all.lose}
                </TableCell>
                <TableCell className={classes.numberColumn} align="center">
                  {row.goalsDiff}
                </TableCell>
                <TableCell align="right">
                  <div style={{ display: 'flex' }}>
                    {row.forme.split('').map((result: string) => (
                      <FormAvatar result={result} />
                    ))}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
