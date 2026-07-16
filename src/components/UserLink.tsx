import React from "react";

import { UserMeta } from "@/interfaces/UserMeta";
import { Link } from "@/utils/hooks";

interface UserLinkProps {
  user: UserMeta;
  children?: React.ReactNode;
}

const UserLink: React.FC<UserLinkProps> = props => {
  // TODO: rating color
  const escapedUsername = encodeURIComponent(props.user.id);
  return <Link href={`/u/${escapedUsername}`} title={props.children ? null : props.user.id}>{props.children ?? props.user.username}</Link>;
};

export default UserLink;
