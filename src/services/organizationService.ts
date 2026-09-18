import { canManageOrganization } from "../domain/permissions.js";
import {
  findMembership,
  insertMembership,
} from "../repositories/organizationRepository.js";

export function canUserManageOrganization(
  userId: string,
  organizationId: string,
): boolean {
  const membership = findMembership(organizationId, userId);

  if (!membership) {
    return false;
  }

  return canManageOrganization(membership);
}

export function addUserToOrganization(
  actorId: string,
  userId: string,
  organizationId: string,
) {
  const actorAuthorized = canUserManageOrganization(
    actorId,
    organizationId,
  );

  if (!actorAuthorized) {
    throw new Error(
      `User ${actorId} cannot manage organization ${organizationId}`,
    );
  }

  const existingMembership = findMembership(
    organizationId,
    userId,
  );

  if (existingMembership) {
    throw new Error(
      `User ${userId} is already part of organization ${organizationId}`,
    );
  }

  return insertMembership({
    userId,
    organizationId,
    permission: "ORGANIZATION_MEMBER",
  });
}