import { Pane, majorScale, Button, Text, Badge, SelectMenu } from 'evergreen-ui';
import React from 'react';

import './App.css';

function App() {
  return (
    <>
      <Pane>
        <Badge color='neutral' marginRight={8}>
          neutral
        </Badge>
        <Badge color='green' marginRight={8}>
          green
        </Badge>
        <Badge color='blue' marginRight={8}>
          blue
        </Badge>
        <Badge color='red' marginRight={8}>
          red
        </Badge>
        <Badge color='orange' marginRight={8}>
          orange
        </Badge>
        <Badge color='purple' marginRight={8}>
          purple
        </Badge>
        <Badge color='yellow' marginRight={8}>
          yellow
        </Badge>
        <Badge color='teal' marginRight={8}>
          teal
        </Badge>

        <SelectMenu
          title='Select name'
          options={['Apple', 'Apricot', 'Banana', 'Cherry', 'Cucumber'].map((label) => ({ label, value: label }))}
          selected={selected}
          onSelect={(item) => setSelected(item.value)}
        >
          <Button>{selected || 'Select name...'}</Button>
        </SelectMenu>
      </Pane>
    </>
  );
}

export default App;
