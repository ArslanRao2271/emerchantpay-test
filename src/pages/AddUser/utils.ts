import { UserValues } from "@components/AddUserForm";

export const parseUserData = (
  data: UserValues[],
  onDeleteClick: (email: string) => void
) =>
  data.map(({ firstName, lastName, email }) => ({
    id: email,
    rowData: [
      { label: email, width: "40%" },
      { label: firstName },
      { label: lastName },
      {
        label: "",
        type: "action-buttons",
        actionButtons: [
          {
            buttonLabel: "Delete",
            size: "small",
            variant: "secondary",
            onClick: () => onDeleteClick(email),
          },
        ],
      },
    ],
  }));
