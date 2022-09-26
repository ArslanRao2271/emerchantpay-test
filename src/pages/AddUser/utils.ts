import { UserValues } from "@components/AddUserForm";

export const parseUserData = (
  data: UserValues[],
  onDeleteClick?: (email: string) => void,
  handleModalOpen?: ({ email, firstName, lastName }: UserValues) => void
) =>
  data.map(({ firstName, lastName, email }) => ({
    id: email,
    rowData: [
      {
        label: email,
        width: "40%",
        onClick: () => handleModalOpen({ email, firstName, lastName }),
      },
      { label: firstName, width: "20%" },
      { label: lastName, width: "20%" },
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
