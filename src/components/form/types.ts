export enum Inputs {
  firstName = 'firstName',
  lastName = 'lastName',
  email = 'email',
  age = 'age',
}

export enum InputType {
  text = 'text',
  email = 'email',
  number = 'number',
}

export interface Person {
  name?: string
  age?: number | ''
}
