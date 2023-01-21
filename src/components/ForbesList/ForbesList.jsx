import { ForbesListItem } from 'components';
import PropTypes from "prop-types";

import {
  BoardHeader,
  LeaderBoard,
  BoardTitle,
  TitleTop,
  TitleBottom,
  LeaderBoardProfiles,
} from './ForbesList.styled';

export const ForbesList = ({ list}) => {
  return(<LeaderBoard>
  <BoardHeader>
    <BoardTitle>
      <TitleTop>Forbes</TitleTop>
      <TitleBottom>Leader board</TitleBottom>
    </BoardTitle>
  </BoardHeader>

  <LeaderBoardProfiles>
      {list.map(({ id, avatar, name, capital, isIncrease }) => { 
        return <ForbesListItem
          key={id}
          avatar={avatar}
          name={name}
          capital={capital}
          isIncrease={isIncrease}
        />
      }) }
  </LeaderBoardProfiles>
  </LeaderBoard>)
  
};

ForbesList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape(
  {
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    capital: PropTypes.number.isRequired,
    isIncrease: PropTypes.bool.isRequired,
  }
)).isRequired,
};
