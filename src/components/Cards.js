import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import ImageCard from './ImageCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2rem auto',
    padding: '1rem',

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export default function Cards({ projects }) {
  const classes = useStyles();
  console.log(projects);
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {
          projects.map((project, index) => (
            <Grid item xs={6} key={index}>
              <ImageCard project={project} />
            </Grid>
          ))}
      </Grid>
    </div>
  )
}
