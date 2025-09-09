import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Box , List, ListItem, ListItemText} from '@mui/material';
import profile_image from '../assets/profile_image.png'
// const Contact = () => {

//   const navigate = useNavigate()

//   return (
//     <div>
//       <h1>Contact</h1>
//       <div className='contact-buttons'>
//         <button onClick={()=>navigate('info')}>Contact Info</button>
//         <button onClick={()=>navigate('form')}>Contact Form</button>
//       </div>
//     </div>
//   )
// }

// export default Contact

const Contact = () => {
  return (
    <div className="contact-body">
      <Grid container ml={-180} mt={-30} className='contact-grid' style={{width:'200%'}}>
        <Grid item xs={3}>
          <Box>

            <h2>Gareth Jones</h2>
            <img //TODO Change image
              src={profile_image}
              alt="avatar"
              style={{ height: '250px' }}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '0em' }}>Please feel free to reach out by email. </p>
          </Box>
          <Grid item xs={6} style={{width:'100%'}}></Grid>
          <Box col={6}>
            <h2 >Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                {/* <ListItem>
                  <ListItemText style={{ fontSize: '20px', fontFamily: 'Anton ' }}>
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    +447561230920
                  </ListItemText>
                </ListItem> */}

                <ListItem>
                  <ListItemText style={{ fontSize: '20px', fontFamily: 'Anton ' }}>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    gareth.jones@materials.ox.ac.uk
                  </ListItemText>
                </ListItem>

                {/* <ListItem>
                  <ListItemText style={{ fontSize: '20px', fontFamily: 'Anton ' }}>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    garethsion@googlemail.com
                  </ListItemText>
                </ListItem> */}

              </List>
            </div>
          </Box>
        </Grid>
      </Grid>
      {/* </Grid> */}
    </div>
  )
}

export default Contact