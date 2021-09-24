import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Container, Divider, Menu, MenuItem } from '@mui/material';
import Link from 'next/link'
import { AccountCircle } from '@material-ui/icons';
import { makeStyles, } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  userName:{
    marginLeft: 6,
  },
  divider:{
    margin: '8px 0',
  }
}))

export default function ButtonAppBar() {
  const [anchorUserMenu, setAnchorUserMenu] = useState(false)
  const classes = useStyles()
  const openUserMenu = Boolean(anchorUserMenu)

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={{backgroundColor:'#000000'}} elevation={3}>
        <Container maxWidth='lg'>
          <Toolbar>            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Anunx
            </Typography>
            <Link href='/user/publish' passHref >
              <Button color="inherit" variant='outlined'>
                Anunciar e Vender
              </Button>
            </Link>
            <IconButton color='secondary' onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
              {
                true === false
                ? <Avatar  src='' />
                : <AccountCircle/>
              } 
              <Typography variant='subtitle2' color='secondary' className={classes.userName}>
                Paulo Ricardo
              </Typography>
            </IconButton>
            <Menu
              anchorEl={anchorUserMenu}
              open={openUserMenu}
              onClose={() => setAnchorUserMenu(null)}              
            >
              <Link href='/user/dashboard' passHref>
                <MenuItem>Meus anúncios</MenuItem>
              </Link>
              <Link href='/user/publish' passHref>
                <MenuItem>Publicar novo anúncio</MenuItem>
              </Link>
              <Divider className={classes.divider}/>
              <MenuItem>Sair</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
