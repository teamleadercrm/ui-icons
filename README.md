# Teamleader UI Icons

Interface icons used in the Teamleader application(s), both as SVG and matching React-based implementation.

## Installation

Teamleader's icons package is [available on npm](https://www.npmjs.com/package/@teamleader/ui-icons).

```sh
$ npm install --save @teamleader/ui-icons
```

If you're already using [teamleader-ui](https://www.npmjs.com/package/teamleader-ui) in your application, you can access the icons using the sub-repo notation `'@teamleader-ui/icons'`.

## Usage

```jsx
import React from 'react';
import { render } from 'react-dom';
import { Button } from '@teamleader/ui';
import { IconWarningMediumFilled } from '@teamleader/ui-icons';

const App = () => {
  return (
    <Button>
      <IconWarningMediumFilled />
      Delete this item
    </Button>
  );
}

render(<App />, document.querySelector('#app'));
```

## Development

### Prerequisites
- node `^7.0.0`
- npm `^5.0.0`

### Getting started
Clone this repo

```sh
$ git clone https://github.com/teamleadercrm/ui-icons.git
```

Add your newly designed SVG files to the `/icons` folder. Make sure they are named properly using the `dimensions_name_variant.svg` syntax, eg: `14x14_meeting_outline.svg` or `24x24_building_filled.svg`.


Don't forget to transform your newly added SVGs to React components by running

```sh
$ npm run build
```

If you are satisifed with your updates, make sure to bump the version number in the `package.json` file and publish it for others to use by running

```sh
$ npm publish --access=public
```
