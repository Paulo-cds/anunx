import { Avatar, Card, CardHeader, CardMedia, Chip, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import TemplateDefault from '../src/templates/Default'
import { makeStyles, } from '@mui/styles'
import Carousel from 'react-material-ui-carousel'


const useStyles = makeStyles((theme) => ({
    box: {
        backgroudColor: theme.palette.background.white,
        padding: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    productName: {
        margin: '15px 0',
    },
    price: {
        fontWeight: 'bold',
        marginBottom: 15,
    },
    card:{
        height: '100%'
    },
    cardMedia: {
        paddingTop: '56%',
    }
}))

const Product = () => {
    const classes = useStyles()


    return (
        <TemplateDefault>
            <Container maxWidth='lg'>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Box className={classes.box}>
                            <Carousel
                                autoPlay={false}
                                animation='slide'
                            >
                                <Card className={classes.card}>
                                    <CardMedia
                                    className={classes.cardMedia}
                                        image='https://source.unsplash.com/random?a=1'
                                        title='Título da imagem'
                                    />
                                </Card>
                                <Card className={classes.card}>
                                    <CardMedia
                                    className={classes.cardMedia}
                                        image='https://source.unsplash.com/random?a=2'
                                        title='Título da imagem'
                                    />
                                </Card>
                            </Carousel>
                        </Box>

                        <Box className={classes.box} textAlign='left'>
                            <Typography component='span' variant='caption'>
                                Publicado 16 junho de 2021
                            </Typography>
                            <Typography component='h4' variant='h4' className={classes.productName}>
                                Jaguar XE 2.0 D R-Sport Aut.
                            </Typography>
                            <Typography component='h4' variant='h4' className={classes.price}>
                                R$ 50.000,00
                            </Typography>
                            <Chip label='Categoria'/>
                        </Box>

                        <Box className={classes.box} textAlign='left'>
                            <Typography component='h6' variant='h6'>
                                Descrição
                            </Typography>
                            <Typography component='p' variant='body2'>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={4}>
                        <Card elevation={0} className={classes.box}>
                            <CardHeader
                                avatar={
                                    <Avatar>T</Avatar>
                                }
                                title='Paulo Ricardo'
                                subheader='paulo@email.com'
                            />
                            <CardMedia
                                image='https://source.unsplash.com/random'
                                title='Paulo Ricardo'
                            />
                        </Card>
                        <Box className={classes.box}>
                            <Typography component='h6' variant='h6'>
                                Localização
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </TemplateDefault>
    )
}

export default Product