// Mapped types

// Example #1

// type UserInfo = {
//   name: string
//   age: number
//   address: string
//   city: string
//   state: string
//   zip: string
// }

// type StrictUserInfo<T> = {
//   readonly [P in keyof Pick<UserInfo, Exclude<keyof UserInfo, T>>]: UserInfo[P]
// }

type UserInfo = {
  name: string
  age: number
  address: string
  city: string
  state: string
  zip: string
}

type StrictUserInfo<T> = {
  readonly [P in keyof Pick<UserInfo, Exclude<keyof UserInfo, T>>]: UserInfo[P]
}

type finalUser = StrictUserInfo<'name'>

let user: finalUser = {
  //   name: 'John Doe',  this property does not exist
  age: 30,
  address: '123 Main St',
  city: 'Anytown',
  state: 'CA',
  zip: '12345',
}
