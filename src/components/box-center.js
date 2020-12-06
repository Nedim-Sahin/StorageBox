import styled from 'styled-components';
import { justifyContent } from 'styled-system';
import Box from './box';

const  BoxCenter= styled(Box)({});

BoxCenter.defaultProps = {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
};

export default BoxCenter;
