import {
    Card as CardMUI,
    CardActions,
    CardContent,
    CardMedia,
    Typography
  } from '@mui/material'

import Button from '@mui/material/Button'

import { makeStyles, } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
 
    cardMedia:{
      paddingTop: '56%',
    },
  }))

const Card = ({image, title, subtitle, actions}) => {
    const classes = useStyles()


    return(
        <CardMUI>
              <CardMedia
                className={classes.cardMedia}
                image={image}
                title={title}
              />
              <CardContent>
                <Typography variant='h5' component='h2'>
                  {title}
                </Typography>
                <Typography>
                  {subtitle}
                </Typography>
              </CardContent>
              {
                  actions
                  ? (
                    <CardActions>
                    <Button size='small' color='primary'>
                      Editar
                    </Button>
                    <Button size='small' color='primary'>
                      Remover
                    </Button>
                  </CardActions>
                  ) : null
              }
        </CardMUI>
    )
}

export default Card