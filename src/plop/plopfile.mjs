const generateComponent = plop => {
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the component:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../components/{{kebabCase name}}/index.ts',
        templateFile: 'templates/index.ts.hbs',
      },
      {
        type: 'add',
        path: '../components/{{kebabCase name}}/{{kebabCase name}}.tsx',
        templateFile: 'templates/component.tsx.hbs',
      },
      {
        type: 'add',
        path: '../components/{{kebabCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs',
      },
      {
        type: 'add',
        path: '../components/{{kebabCase name}}/types.ts',
        templateFile: 'templates/types.ts.hbs',
      },
    ],
  })
}
export default generateComponent
