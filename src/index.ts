import type { OrganizationMembership } from "./domain/models.js";
import { canManageOrganization } from "./domain/permissions.js";

const membership: OrganizationMembership = {
  organizationId: "org_1",
  userId: "user_1",
  permission: "ORGANIZATION_ADMIN",
};

console.log(canManageOrganization(membership));