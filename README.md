# React Component Library

React components to be reused across projects presented in a storybook dev enviornment.


## Usage
To install: 

### `npm i linn-components-library`

You can explore components currently in the project [here](https://fervent-einstein-8b4f23.netlify.com/).

That storybook page will serve as a living, interactive source of documentation for the components available in the package as well as a style guide for our react forms.

To use components, import them individually like so: 

```
import BackButton from 'linn-reusable-react-components-library';
```

## Development

In the project directory, you can run:

### `npm run storybook`

which runs the storybook dev server.

Make a new branch and add your new components, tests and stories in the relevant directories and view them in storybook.
When you are ready to share your new component, add it to the index.js following the existing syntax. Up the version number in package.json and then make a pull request for review.

After merging your new component branch into master, build the npm package: 

### ` npm run build` 

and publish it: 

### ` npm publish --access public` 

to publish the changes to npm. (n.b. if this is your first time, you'll need to make an npm account and request contribution permissions for this package.)


