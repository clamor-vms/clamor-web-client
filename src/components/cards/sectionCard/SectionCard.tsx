import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import { ICardData } from "./SectionCard.interface";

const styles = {
  card: {
    minWidth: 275,
    maxWidth: 450,
    margin: 5
  },
  bullet: {
    // display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

const SectionCard: React.SFC<ICardData> = ({
  id,
  url,
  type,
  title,
  description,
  classes: { card, title: classTitle, pos }
}) => {
  return (
    <Card key={id} className={card}>
      <CardContent>
        <Typography className={classTitle} color="textSecondary">
          {type}
        </Typography>
        <Typography variant="headline" component="h2">
          {title}
        </Typography>
        <Typography className={pos} color="textSecondary">
          {type}
        </Typography>
        <Typography component="p">{description}</Typography>
      </CardContent>
      <CardActions>
        <NavLink to={`/${url}`}>
          <Button size="small">Manage</Button>
        </NavLink>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(SectionCard);
