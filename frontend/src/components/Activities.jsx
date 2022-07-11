import { Text, Grid } from '@nextui-org/react';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import activitiesActions from '../redux/actions/activitiesAction';


function Activities({ id }) {
  const dispatch = useDispatch()
  const [activities, setActivities] = useState()

  useEffect(() => {

    const response = async () => {
      const actRes = await dispatch(activitiesActions.findActivitiesFromItinerary(id));
      setActivities(actRes);
    }
    response()
     // eslint-disable-next-line 
  }, [])

  return (
    <>
      <Grid className="activitiesBox">
      {activities?.length > 0 ?
        activities.map(activity =>
          <div
          key={activity._id}
              style={{
              background: `url(${activity.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              objectFit: "cover"
            }}
            className="cardActivity"
          >
            <div className="cardActBox">
              <h4 className="cardActName">{activity.name}</h4>
            </div>
          </div>
          ) : <Text css={{ fontFamily: "Vollkorn", color: "#83F6E1" , fontSize: "20px", width: "70%", textAlign: "center" }} >
          We are working on activities come back soon
        </Text>
        
       }
       </Grid>
    </>

  )
}


export default Activities