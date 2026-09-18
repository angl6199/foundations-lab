import type { OrganizationMembership } from "./models.js";

export function canManageOrganization(membership: OrganizationMembership,): boolean {
  return membership.permission === "ORGANIZATION_ADMIN";
}