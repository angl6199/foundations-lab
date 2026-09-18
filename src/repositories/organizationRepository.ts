import type { OrganizationMembership, Permission } from "../domain/models";

const memberships: OrganizationMembership[] = [
    {
        organizationId: "org_1",
        userId: "user_1",
        permission: "ORGANIZATION_ADMIN"
    },
    {
        organizationId: "org_2",
        userId: "user_2",
        permission: "ORGANIZATION_MEMBER"
    },
];

export function findMembership(organizationId: string, userId: string): OrganizationMembership | undefined {
    return memberships.find((membership) =>
        membership.userId === userId && membership.organizationId === organizationId
    );
}

export function insertMembership(membership: OrganizationMembership) {
    memberships.push(membership);

    return membership;
}