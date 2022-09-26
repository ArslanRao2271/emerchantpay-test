import { UserValues } from "@components/AddUserForm";

export const parseUserData = (data: UserValues[]) =>
  data.map(({ firstName, lastName, email }) => ({
    id: email,
    rowData: [{ label: email }, { label: firstName }, { label: lastName }],
  }));
