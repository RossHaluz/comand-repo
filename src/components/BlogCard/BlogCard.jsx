import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardPoster,
  CardBody,
  Tag,
  CardTitle,
  CardText,
  CardFooter,
  UserBox,
  Avatar,
  UserInfo,
  UserName,
  Date,
} from "./BlogCard.styled";

const BlogCard = ({
  poster,
  tag,
  title,
  description,
  name,
  avatar,
  postedAt,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardPoster src={poster} alt={name} />
      </CardHeader>
      <CardBody>
        <Tag>{tag}</Tag>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
      <CardFooter>
        <UserBox>
          <Avatar src={avatar} alt={name} />
          <UserInfo>
            <UserName>{name}</UserName>
            <Date>{postedAt}</Date>
          </UserInfo>
        </UserBox>
      </CardFooter>
    </Card>
  );
};

BlogCard.propTypes = {
  name: PropTypes.string.isRequired,
  postedAt: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default BlogCard;
