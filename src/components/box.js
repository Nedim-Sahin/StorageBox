import styled from 'styled-components';
import {
  color,
  compose,
  size,
  flexbox,
  space,
  borderRadius,
} from 'styled-system';
import {View} from 'react-native';

const Box = styled(View)(compose(flexbox, color, size, space, borderRadius));

export default Box;
