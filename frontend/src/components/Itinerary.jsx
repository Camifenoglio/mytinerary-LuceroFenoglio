import { Card, Text, Avatar, Collapse, Grid, Button } from '@nextui-org/react';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Itinerary({ data }) {
  return (
    <div className='cardItineraryBox'>
      <Text css={{fontFamily:"Allura", fontSize: "50px", color: "grey", textShadow: "8px -2px 3px white" }} h1>Itineraries</Text>
        {data.map(itinerary =>
          <Card isHoverable variant="bordered"  key={itinerary._id} css={{ width:"70vw", backgroundColor: "WhiteSmoke", boxShadow: "0px 1px 20px", marginBottom: "4vh"}} className="cardBox">
            <Card.Header css={{ display: "flex", justifyContent: "center" }}>
              <Text css={{ fontFamily: "Vollkorn", fontSize: "28px", color: "grey", textAlign: "center", textShadow: "0px 0px 3px grey", marginTop: "2vh" }} h1>{itinerary.name}</Text>
            </Card.Header>
            <Card.Body className='boxBodyItinerary' >
              <Grid css={{ display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap", margin: "1rem", gap: "2rem" }} className="itineraryperson">
                <Avatar
                  css={{ size: "7rem" }}
                  src={itinerary.imagePerson}
                  zoomed
                  squared
                />
                <Text h2 css={{ textAlign: "center", backgroundColor: "#83f6e1", borderRadius: "5rem", padding: "0.6rem", fontFamily: "Vollkorn", fontSize: "20px", alignSelf: "center", color: "grey" }}>
                  {itinerary.personName}
                </Text>
              </Grid>
              <Grid css={{ display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap", gap: "3rem", alignItems: "center", marginTop: "1vh", marginBottom: "1vh" }} className="durationBox">
                <Text css={{ fontFamily: "Vollkorn", marginTop: "1vh", fontSize: "20px", color: "rgb(90, 90, 80)", textShadow: "0px 2px 5px" }}>Duration: 🕓{itinerary.duration}</Text>
                <Text css={{ fontFamily: "Vollkorn", fontSize: "20px", color: "rgb(66, 65, 65)", textShadow: "0px 2px 5px" }}>Price: {itinerary.price}</Text>
              </Grid>

              <Grid css={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", margin: "1vh" }}>
                <Button
                  auto
                  color="error"
                  icon={<FavoriteIcon fill="currentColor" />}
                />
                <Text css={{ fontFamily: "Vollkorn", fontSize: "25px", color:"grey" }}>{itinerary.likes}</Text>
              </Grid>
              <Grid css={{ display: "flex", justifyContent: "center", flexWrap: "wrap", fontSize: "20px", fontFamily: "Vollkorn", gap: "2rem"}} className="hashBox">
                {itinerary.hashtags.map((hash, index) =>
                  <Text css={{ color: "grey" }} key={index}>{hash}</Text>)}
              </Grid>

            </Card.Body>
            <Grid.Container gap={2}>
              <Grid css={{ width: "100%" }}>
                <Collapse.Group css={{ backgroundColor: "grey"}} splitted shadow>
                  <Collapse css={{ fontFamily: "Vollkorn", fontSize: "20px" }} title="Activities">
                    <Text css={{ fontFamily: "Vollkorn" }} >
                      we are working on activities come back soon
                    </Text>
                  </Collapse>
                </Collapse.Group>
              </Grid>
            </Grid.Container>
          </Card>
        )}
      </div>
  )
}


export default Itinerary