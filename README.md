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

## How to make a release

1.  Pull the `master` branch to make sure you have all the latest code on your local machine.
2.  Make a new branch, starting from `master` and give it the name of the next version you want to release (`release/new.version.number`).
3.  Bump the version in `package.json` and commit with message `Version bump` and push.
4.  Update `CHANGELOG.md`

    - Replace `[unreleased]` with the `[new.version.number]` and add the release `date next to it, like this`- yyyy-mm-dd`.
    - Clean up the unused titles.
    - Prepare for next release by adding the following content on top of the file:

      ```
      ## [unreleased]

      ### Added

      ### Changed

      ### Deprecated

      ### Removed

      ### Fixed
      ```

    - Commit with message `Update changelog` and push.

5.  Make a `pull request` on Github where you add the `changelog items` as the description and wait for approval.
6.  Make a `draft release` on Github and fill in the following fields:
    - **Tag version:** `new.version.number` @ `target: master`
    - **Release title:** `new.version.number`
    - **Description:** add the `changelog items`
7.  Once the pull request has the needed amount of approvals, merge it into the `master` branch.
8.  `Publish` the earlier created `draft release` on Github.
9.  In your `console`, pull the `master` branch.
10. `Publish` to `npm` using the `npm publish --access=public` command.
