import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import {Box} from "@material-ui/core";


  function Condition() {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
    return (
      <>
          <Box display="flex" flexDirection="column" className="conditions">

       <p> <Checkbox
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /> NEW</p>

      <p><Checkbox
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /> USED</p>

      <p><Checkbox
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /> COLLECTIBLE</p>

      <p><Checkbox
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /> RENEWED</p>
</Box>
      </>
    );
  }
  
  export default Condition;
  