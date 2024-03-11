import Avatar from "@mui/material/Avatar";

const ProfileAvatar = ({ children }) => {
  return (
    <Avatar
      sx={{
        backgroundColor: "orange",
        width: "24px",
        height: "24px",
        fontSize: "16px",
      }}
    >
      {children}
    </Avatar>
  );
};

export default ProfileAvatar;
