// import React from 'react';
// import 'react-toastify/dist/ReactToastify.css';
// import { useSelector } from 'react-redux';
// import Button from '@mui/material/Button';
// import Snackbar from '@mui/material/Snackbar';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function Toast() {
//   const toast = useSelector(store => store.usersReducer.toast.message)
//   console.log(toast)
 

//     const [open, setOpen] = React.useState(false);
  
//     const handleClick = () => {
//       setOpen(true);
//     };
  
//     const handleClose = (event, reason) => {
//       if (reason === 'clickaway') {
//         return;
//       }
  
//       setOpen(false);
//     };
  
//     const action = (
//       <React.Fragment>
//         <Button color="secondary" size="small" onClick={handleClose}>
//           UNDO
//         </Button>
//         <IconButton
//           size="small"
//           aria-label="close"
//           color="inherit"
//           onClick={handleClose}
//         >
//           <CloseIcon fontSize="small" />
//         </IconButton>
//       </React.Fragment>
//     );
  
//     return (
//       <div>
//         <Button onClick={handleClick}>Open</Button>
//         <Snackbar
//           open={open}
//           autoHideDuration={6000}
//           onClose={handleClose}
//           message= {toast}
//           action={action}
//         />
//       </div>
//     );
//   }


// export default Toast
