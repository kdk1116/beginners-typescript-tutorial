interface User {
  id: number;
  firstName: string;
  lastName: string;
  /**
   * How do we ensure that role is only one of:
   * - 'admin'
   * - 'user'
   * - 'super-admin'
   */
  role: Role;
}
//this is a bad way to write this
// type SuperAdmin = "super-admin";
// type Admin = "admin";
// type UserRole = "user";

//better implementation
type Role = "admin" | "user" | "super-admin";

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  // @ts-expect-error
  role: "I_SHOULD_NOT_BE_ALLOWED",
};
