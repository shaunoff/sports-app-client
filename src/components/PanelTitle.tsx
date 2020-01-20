import React, { FunctionComponent } from 'react'
import Typography from '@material-ui/core/Typography';
import { FolderOutlined} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
//import { flexbox } from '@material-ui/system';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '4px'
    },
    icon: {
        margin: '0px 16px 0px 16px'
    },
    cardAction: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
});

interface PanelTitleProps {
    children: string
    icon?: string
    variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline" | "srOnly" | "inherit" | undefined
}


const PanelTitle:FunctionComponent<PanelTitleProps> = ({children,icon,variant}) => {
    const classes = useStyles()
    return (
        <>
        <div className={classes.container}>
            <FolderOutlined color="secondary" className={classes.icon}/>
            <Typography variant={variant}>{children}</Typography>
        </div>
        <Card style={{width: '500px'}}>
            <CardContent>
                Hello
            </CardContent>
            <CardActions className={classes.cardAction}>
                <Button variant="contained" color="primary">Confirm</Button>
            </CardActions>
        </Card>
        </>
    )
}

export default PanelTitle
