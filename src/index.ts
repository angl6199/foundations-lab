import { canUserManageOrganization, addUserToOrganization } from "./services/organizationService.js";

console.log(canUserManageOrganization("user_1", "org_1"));

console.log(canUserManageOrganization("user_2", "org_2"));

/* console.log(canUserManageOrganization("user_3", "org_3")); */

console.log(addUserToOrganization("user_1", "user_2", "org_1"))
console.log(addUserToOrganization("user_2", "user_3", "org_2"))
console.log(addUserToOrganization("user_1", "user_1", "org_1"))
