import {
    Container,
    IconButton,
    InputBase,
    Typography,
    Grid,    
} from '@mui/material'

import Paper from '@mui/material/Paper'
import TemplateDefault from '../src/templates/Default'
import SearchIcon from '@mui/icons-material/Search'
import { makeStyles, } from '@mui/styles'
import Card from '../src/components/Card'

const useStyles = makeStyles((theme) => ({    
    searchBox:{
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(0 , 2),
        marginTop: 20,
    },
    cardGrid: {
        marginTop: 50,
    },
}))


const Home = () => {
    const classes = useStyles()


    return (
        <TemplateDefault>
            <Container maxWidth='md'>
                <Typography component='h1' variant='h3' align='center' color='textPrimary'>
                    O que deseja encontrar?
                </Typography>
                <Paper className={classes.searchBox}>
                    <InputBase
                        placeholder='Ex: IPhone 12 com garantia'
                        fullWidth
                    />                    
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>
                </Paper>
            </Container>

            <Container maxwidth='lg' className={classes.cardGrid}>
                <Typography component='h2' variant='h4' align='center' color='textPrimary'>
                    Destaques
                </Typography>
                <br/>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                    <Card
                        image={'https://source.unsplash.com/random'}
                        title='Produto X'
                        subtitle='R$60,00'                        
                    />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            image={'https://source.unsplash.com/random'}
                            title='Produto X'
                            subtitle='R$60,00'                        
                        />
                    </Grid>

            
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            image={'https://source.unsplash.com/random'}
                            title='Produto X'
                            subtitle='R$60,00'                        
                        />
                    </Grid>                              

                </Grid>
            </Container>
        </TemplateDefault>
    )
}


export default Home