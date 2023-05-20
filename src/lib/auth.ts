import { cookies } from 'next/dist/client/components/headers';
import decode from 'jwt-decode';
export type UserResponse = {
  id: number;
  avatar_url: string;
  name: string;
  login: string;
};
export const getUser = () => {
  const token = cookies().get('token')?.value;
  if (!token) return {} as UserResponse;
  const user: UserResponse = decode(token as string);
  return user;
};
