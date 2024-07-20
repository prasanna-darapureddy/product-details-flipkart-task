import { Home, ShoppingCart } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Badge, Box, IconButton, InputBase, Toolbar, Typography } from '@mui/material'
import { styled, alpha } from '@mui/material/styles';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

interface IState {
  search: string,
}

function Header() {
  const [search, setSearch] = useState<IState['search']>('')
  const cartList = JSON.parse(localStorage.getItem('cartList') || '[]')
  const productsList = JSON.parse(localStorage.getItem('productsList') || '[]')
  const navigate = useNavigate()

  const onClickCartIcon = () => {
    navigate('/cart')
  }

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const onClickSearchIcon = () => {
    const filteredList = productsList.length !== 0 && productsList.filter(eachProduct => eachProduct.title.includes(search.toLowerCase()))
    localStorage.setItem("productsList", JSON.stringify(filteredList))
    console.log(filteredList)
  }

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: 'none', sm: 'block', cursor: 'pointer' } }}
          onClick={() => navigate('/')}
        >
          Products
        </Typography>
        <Search>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            value={search}
            onChange={onChangeSearch}
          />
          <Box onClick={onClickSearchIcon} component='button' sx={{ backgroundColor: 'transparent', border: 'none', outline: 'none', color: '#fff', cursor: 'pointer' }}>
            <SearchIcon />
          </Box>
        </Search>

        <Box sx={{ flexGrow: 1 }} />
        <Link to='/' style={{ textDecoration: 'none', color: '#fff', fontSize: '30px' }}><Home /></Link>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={onClickCartIcon}>
            <Badge badgeContent={cartList.length} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header

