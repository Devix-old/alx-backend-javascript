import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photo = await uploadPhoto().then((result) => (result));
  const user = await createUser().then((result) => (result));
  return { photo, user };
}
