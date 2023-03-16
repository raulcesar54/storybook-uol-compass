import { CardProps } from "./props";
import { FiChevronRight } from "react-icons/fi";
import {
  Avatar,
  CardContainer,
  Name,
  Position,
  UserInformationGroup,
} from "./style";

export const Card = (props: CardProps) => {
  const hideAvatar = !!props.src;
  return (
    <CardContainer imageHidden={!hideAvatar} col={props.alignCol}>
      {hideAvatar && <Avatar src={props.src} />}
      <UserInformationGroup>
        <Name>{props.name}</Name>
        <Position>{props.position}</Position>
      </UserInformationGroup>
      {!props.hideIcon && !props.alignCol && (
        <FiChevronRight style={{ marginLeft: "auto" }} />
      )}
    </CardContainer>
  );
};
