import { Card, Text, Avatar, Collapse, Grid } from '@nextui-org/react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import itinerariesActions from '../redux/actions/itinerariesAction';
import Activities from '../components/Activities'
import Comments from '../components/Comments'
import toast from 'react-hot-toast';


function Itinerary( {data, handleSetR} ) {
  const dispatch = useDispatch()
  const user = useSelector(store => store.usersReducer.user)

  async function likesOrDislikes() {

    const res = await dispatch(itinerariesActions.likeDislike(data._id))
    handleSetR()
    console.log(res)

    if (res.data.success) {
      toast.success(res.data.message)
  } else {
      toast.error(res.data.message)
  }
  }

  return (

    <Card isHoverable variant="bordered" key={data._id} css={{ width: "70vw", boxShadow: "0px 1px 20px", marginBottom: "2vh" }} className="cardBox">
      <Card.Header css={{ display: "flex", justifyContent: "center" }}>
        <Text css={{ fontFamily: "Vollkorn", fontSize: "28px", color: "whitesmoke", textAlign: "center", textShadow: "0px 0px 3px grey", marginTop: "2vh" }} h1>{data.name}</Text>
      </Card.Header>
      <Card.Body className='boxBodyItinerary' >
        <Grid css={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "2rem" }} className="itineraryperson">
          <Avatar
            css={{ size: "5rem"}}
            src={data.imagePerson}
            zoomed
            squared
            bordered
            color="gradient"
          />
          <Text h2 css={{ textAlign: "center", backgroundColor: "#83f6e1", borderRadius: "3rem", padding: "0.6rem", fontFamily: "Vollkorn", fontSize: "20px", alignSelf: "center", color: "grey" }}>
            {data.personName}
          </Text>
        </Grid>
        <Grid css={{ display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap", gap: "6rem", alignItems: "center", marginTop: "1vh", marginBottom: "1vh" }} className="durationBox">
          <Text css={{ fontFamily: "Vollkorn", marginTop: "1vh", fontSize: "18px", color: "whitesmoke" }}>Duration: 🕓{data.duration}</Text>
          <Text css={{ fontFamily: "Vollkorn", fontSize: "18px", color: "whitesmoke" }}>Price: {data.price}</Text>
        </Grid>

        <Grid css={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", margin: "1vh" }}>

          {user ?
            <button className="button-like" onClick={likesOrDislikes}> {data.likes?.includes(user.id) ?
              (<span className="material-symbols-outlined" style={{ fontSize: "30", color: "red" }}>
                favorite
              </span>) :
              (<span style={{ fontSize: "30", color:"white" }} className="material-symbols-outlined">favorite_border</span>)}
            </button>
            : (<span style={{ fontSize: "30" }} className="material-symbols-outlined">favorite_border</span>)
          }

          <Text css={{ fontFamily: "Vollkorn", fontSize: "23px", color: "whitesmoke" }}>{data.likes?.length}</Text>

        </Grid>
        <Grid css={{ display: "flex", justifyContent: "center", flexWrap: "wrap", fontSize: "18px", fontFamily: "Vollkorn", gap: "1rem" }} className="hashBox">
          {data.hashtags.map((hash, index) =>
            <Text css={{ color: "whitesmoke" }} key={index}>{hash}</Text>)}
        </Grid>

      </Card.Body>
      <Grid.Container gap={1} style={{display: "flex", justifyContent: "center"}}>
        <Grid css={{ width: "100%" }}>
          <Collapse.Group css={{ backgroundColor: "transparent" }} splitted shadow>
            <Collapse css={{ fontFamily: "Vollkorn", fontSize: "18px", display:"flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} title="Activities">
              <Activities id={data._id} />
         
              <Comments data = {{data}} handleSetR={handleSetR}/>
            </Collapse>
          </Collapse.Group>
        </Grid>
      </Grid.Container>
    </Card >
  )
}


export default Itinerary