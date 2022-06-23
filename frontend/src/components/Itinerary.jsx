import react from 'react';
import { Card, Text } from '@nextui-org/react';
import { Collapse, Grid } from "@nextui-org/react";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import itinerariesActions from '../redux/actions/itinerariesAction'

function Itinerary() {
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(itinerariesActions.findItinerariesFromCity(id))
  }, [])

  const itineraries = useSelector(store => store.itinerariesReducer.getItinerariesFromCity)

  console.log(itineraries)

  return (
    <div className='cardItineraryBox'>
        {itineraries.map(itinerary => 
      <Card isHoverable variant="bordered" key={itinerary._id} css={{ mw: "800px" }}>
                <Card.Header>
            <Text b>{itinerary.name}</Text>
          </Card.Header>
              <Card.Body>
                <Text>{itinerary.duration}</Text>
              </Card.Body>
    <Grid.Container gap={2}>
      <Grid>
        <Collapse.Group splitted>
          <Collapse title="Option A">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
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