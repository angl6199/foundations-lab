export type Organization = {
  id: string;
  name: string;
};

export type User = {
  id: string;
  email: string;
};

export type OrganizationMembership = {
  organizationId: string;
  userId: string;
  permission: Permission;
};

export type Permission =
  | "ORGANIZATION_ADMIN"
  | "ORGANIZATION_MEMBER";