import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import '../slide.css'

export default function ColorTabs({ selectedValue, onChange }) {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onChange(event, newValue); 
  };

  return (
    <Box sx={{ width: '100%' }} className='centered-div'>
      <Tabs
        
        value={selectedValue}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="set1" label="Torte" />
        <Tab value="set2" label="Kolaci" />
      </Tabs>
    </Box>
  );
}
