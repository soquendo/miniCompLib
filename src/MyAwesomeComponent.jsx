import React from 'react';
import Box from './Box';
import Text from './Text';
import Button from './Button';

const MyAwesomeComponent = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <Box size="large">
      <Text size="medium" color="red">Hello, world!</Text>
      <Button color="blue" onClick={handleClick}>Click me</Button>
    </Box>
  );
};

export default MyAwesomeComponent;
