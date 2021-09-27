import Header from '../components/Header'
import Footer from '../components/Footer'
import { Box } from '@mui/system'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(6,0,6)
    }
}))


const Default = ({children}) => {
    const classes= useStyles()
    return(
        <>
            <Header/>
            <Box className={classes.container}>
                {children}
            </Box>
            <Footer/>
        </>
    )
}

export default Default