import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import NextLink from 'next/link';
import { Link as MUILink } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => {
  console.log(theme);
  return {
    appBar: {
      position: 'relative'
    },
    toolbarTitle: {
      flexGrow: 1
    },
    link: {
      margin: theme.spacing(1, 1.5),
      color: theme.palette.primary.contrastText
    }
  };
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          綠捷傳動股份有限公司
        </Typography>
        <nav>
          <NextLink href="/" passHref>
            <MUILink underline="none" className={classes.link}>
              液壓伺服捷能系統
            </MUILink>
          </NextLink>
          <NextLink href="/" passHref>
            <MUILink underline="none" className={classes.link}>
              永磁同步伺服馬達
            </MUILink>
          </NextLink>
          <NextLink href="/" passHref>
            <MUILink underline="none" className={classes.link}>
              客製化電機設計
            </MUILink>
          </NextLink>
          <NextLink href="/" passHref>
            <MUILink underline="none" className={classes.link}>
              永磁直驅大風機
            </MUILink>
          </NextLink>
          <NextLink href="/" passHref>
            <MUILink underline="none" className={classes.link}>
              農魚牧專用設備
            </MUILink>
          </NextLink>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
