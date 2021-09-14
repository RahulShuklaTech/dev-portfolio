import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby';

const useStyles = makeStyles({
  root: {
    maxWidth: 545,
  },
});

export default function ImageCard({project}) {
  const classes = useStyles();
  const {title, description, image, link} = project;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Banner Iamge"
          height="340"
          image= {image}
          title= {title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style = {{color: "black"}}>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={link} target="_blank" > <button style = {{borderColor: "skyblue", color: "black", padding: ".5rem 2rem", outline: 'none', borderRadius: "12px", fontWeight: 'bolder', margin: "0 auto"}}>
          Visit
        </button></Link>
        
      </CardActions>
    </Card>
  );
}