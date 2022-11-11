export type StatusCode =
  // Success Responses
  | 200 // OK
  | 201 // CREATED
  | 204 // NO_CONTENT

  // Error Responses
  | 400 // BAD_REQUEST
  | 401 // UNAUTHORISED
  | 403 // FORBIDDEN
  | 404 // NOT FOUND
  | 500; // INTERNAL_SERVER_ERROR

//// User Related ////
export type InputUser = {
  name: string;
  email: string;
  photo?: string;
  role: Roles;
  password: string | undefined;
  passwordConfirm: string | undefined;
};
type UserId = {
  _id: string;
};

export type CreatedUser = UserId & InputUser;

export enum Roles {
  USER = 'user',
  ADMIN = 'admin',
  MASTER = 'master',
}
