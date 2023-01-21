import PropTypes from "prop-types";
import { IconContext } from 'react-icons';

import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';

export const StatisticItem = ({title, total, icon}) => {
  // console.log(typeof typeof icon)
  return   <StatisticBox>
  {<IconContext.Provider value={{ size: 30, color: "lightblue" }}>{icon}</IconContext.Provider>}
  <StatisticCounter>{total}</StatisticCounter>
  <StatisticText>{title}</StatisticText>
</StatisticBox>;
};


StatisticItem.propTypes = {
  total: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired
}