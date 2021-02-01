import React, { useContext } from "react";
import { Grid, Paper } from "@material-ui/core";
import "../../styles/Home.css";
import Luggage from "../../assets/luggage.png";
import magnifyGlass from "../../assets/magnifyGlass.png";
import notebook from "../../assets/notebook.png";
import train from "../../assets/train.png";
import { UserContext } from "../../store/Store";

const dashboardCards = [
  { name: "INSERT PASSENGER", link: "./add-passenger", img: notebook, color: "#2e7d32", BackColor: "#c8e6c9" },
  { name: "SHOW ALL PASSENGERS", link: "./show-passenger", img: Luggage, color: "#1565c0", BackColor: "#bbdefb" },
  {
    name: "SEARCH ALL PASSENGERS",
    link: "./search-passenger",
    img: magnifyGlass,
    color: "#6a1b9a",
    BackColor: "#e1bee7",
  },
  { name: "MANAGE CONVEYANCE", link: "./manage-conveyance", img: train, color: "#424242", BackColor: "#e0e0e0" },
  { name: "LOGOUT", link: "/logout", color: "#c62828", BackColor: "#ffcdd2" },
];
export default function Home(props) {
  const [user, setUser] = useContext(UserContext);
  const goToRoute = (link) => {
    link !== "/logout" ? props.history.push(link) : setUser(null);
  };
  return (
    <Grid container direction="row" className="DashboardWrapper" alignItems="center" justify="center">
      {dashboardCards.map((card, key) => (
        <Grid key={key} item xs={12} sm={6} md={4} lg={3} xl={3} className="Card-Wrapper">
          <Paper
            elevation={3}
            className="CardPaper"
            onClick={() => goToRoute(card.link)}
            style={{ color: card.color, backgroundColor: card.BackCoslor, backgroundImage: `url(${card.img})` }}>
            {card.name}
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
