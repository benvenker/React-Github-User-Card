import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./MaterialCard.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "20px auto",
    width: "50%",
    display: "flex"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function SimpleCard(props) {
  const { user, followers } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          GitHub User
        </Typography>
        <Typography variant="h5" component="h2">
          {user.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Works {user.company}
        </Typography>
        <Typography variant="body2" component="p">
          {user.location}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Followers
        </Typography>
        {followers.map(follower => {
          return (
            <Typography variant="body2" content="p">
              {follower.login}
            </Typography>
          );
        })}
      </CardContent>
    </Card>
  );
}
