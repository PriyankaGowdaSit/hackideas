import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IdeasPage from '../Views/IdeasPage';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function MainPage(props) {
  const [value, setValue] = React.useState(0);
  const employeeId = props.match.params.loginId
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, height: 300, marginTop:5 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        // sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="All Ideas" {...a11yProps(0)} />
        <Tab label="Ideas Posted by You" {...a11yProps(1)} />
     
       
        
      </Tabs>
      <TabPanel value={value} index={0}>
       <IdeasPage employeeId={employeeId} displayType="all"/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <IdeasPage employeeId={employeeId} displayType="byEmployee"/>
     
      </TabPanel>
     
     
    </Box>
  );
}
