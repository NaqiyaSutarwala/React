import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ProfileAvatar from "./ProfileAvatar";
import PriorityChip from "./PriorityChip";
import { SpanForMarginRight } from "./NewTask";

export default function TaskCard({
  title,
  description,
  priority,
  assigned,
  id,
}) {
  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{ marginTop: "20px", position: "relative" }}
    >
      <CardHeader title={title} subheader={id} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <PriorityChip priority={priority} />
        <SpanForMarginRight />
        <ProfileAvatar>{assigned}</ProfileAvatar>
        <ActionButtons />
      </CardActions>
    </Card>
  );
}

const ActionButtons = () => {
  return (
    <div style={{ float: "right", position: "absolute", right: "10px" }}>
      <IconButton aria-label="add to favorites">
        <EditIcon />
      </IconButton>
      <IconButton aria-label="share">
        <DeleteIcon />
      </IconButton>
    </div>
  );
};
