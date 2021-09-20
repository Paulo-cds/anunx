import TemplateDefault from '../../src/templates/Default'
import Container from '@mui/material/Container'
import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { makeStyles, } from '@mui/styles'
import Button from '@mui/material/Button'


const useStyles = makeStyles(() => ({
  container: {
    padding: '8px 0 6px'
  },
  cardMedia:{
    paddingTop: '56%',
  },
  buttonAdd:{
    margin: '30px auto',
    display: 'block',
  }
}))


export default function Home(){
  const classes = useStyles()
  return(
    <TemplateDefault>
      <Container maxWidth='sm' className={classes.container}>
        <Typography component='h1' variant='h2' align='center'>
          Meus Anúncios
        </Typography>
        <Button variant='contained' color="primary" className={classes.buttonAdd}>
          Publicar novo anúncio
        </Button>
      </Container>

      <Container maxWidth='md'>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                className={classes.cardMedia}
                image={'https://source.unsplash.com/random'}
                title='Titulo da imagem'
              />
              <CardContent>
                <Typography variant='h5' component='h2'>
                  Produto X
                </Typography>
                <Typography>
                  R$60,00
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small' color='primary'>
                  Editar
                </Button>
                <Button size='small' color='primary'>
                  Remover
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                className={classes.cardMedia}
                image={'https://source.unsplash.com/random'}
                title='Titulo da imagem'
              />
              <CardContent>
                <Typography variant='h5' component='h2'>
                  Produto X
                </Typography>
                <Typography>
                  R$60,00
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small' color='primary'>
                  Editar
                </Button>
                <Button size='small' color='primary'>
                  Remover
                </Button>
              </CardActions>
            </Card>
          </Grid>

          
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                className={classes.cardMedia}
                image={'https://source.unsplash.com/random'}
                title='Titulo da imagem'
              />
              <CardContent>
                <Typography variant='h5' component='h2'>
                  Produto X
                </Typography>
                <Typography>
                  R$60,00
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small' color='primary'>
                  Editar
                </Button>
                <Button size='small' color='primary'>
                  Remover
                </Button>
              </CardActions>
            </Card>
          </Grid>          

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                className={classes.cardMedia}
                image={'https://source.unsplash.com/random'}
                title='Titulo da imagem'
              />
              <CardContent>
                <Typography variant='h5' component='h2'>
                  Produto X
                </Typography>
                <Typography>
                  R$60,00
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small' color='primary'>
                  Editar
                </Button>
                <Button size='small' color='primary'>
                  Remover
                </Button>
              </CardActions>
            </Card>
          </Grid>

        </Grid>
      </Container>
    </TemplateDefault>
  )
}