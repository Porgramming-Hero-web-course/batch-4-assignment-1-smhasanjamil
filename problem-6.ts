interface Profile {
  name: string;
  age: number;
  email: string;
}

const updateProfile = (
  currentProfile: Profile,
  profileUpdates: Partial<Profile>
): Profile => {
  return { ...currentProfile, ...profileUpdates };
};

const myProfile = { name: "Hasan", age: 25, email: "hasan@gmail.com" };
updateProfile(myProfile, { age: 27 });
