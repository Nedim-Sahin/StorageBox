import styled from 'styled-components';
import {
  color,
  compose,
  size,
  space,
  flexbox,
  layout,
  borderRadius,
} from 'styled-system';
import {TouchableOpacity} from 'react-native';

const Button = styled(TouchableOpacity)(
  compose(flexbox, space, color, size, layout, borderRadius),
);

Button.defaultProps = {
  flexDirection: 'row',
  alingItems: 'center',
  justifyContent: 'center',
};

export default Button;
