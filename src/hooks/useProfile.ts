import { ProfileT } from "types"

export const useProfile = (): ProfileT => {
  // TODO: Get this from context
  const profile: ProfileT = { fullName: 'Jane Doe', 'email': 'testmail@mail.com', profilePic: 'https://i.pinimg.com/originals/b8/69/5f/b8695f007aea9a08a0419479217ca6aa.jpg' }

  return profile
}