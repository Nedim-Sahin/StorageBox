import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgQrCode(props) {
  return (
    <Svg height="24" viewBox="0 0 512 512" width="24" className="" {...props}>
      <Path d="M30 30h90V0H0v120h30zm0 0M392 0v30h90v90h30V0zm0 0M482 482h-90v30h120V392h-30zm0 0M30 392H0v120h120v-30H30zm0 0" />
      <Path d="M61 60v150h150v-90h30V90h-30V60zm120 120H91V90h90zm0 0M451 450V300h-60v-30h-30v30h-90v30h30v30h-30v30h30v60zM331 330h90v90h-90zm0 0M151 270h60v-30H61v30h60v30H91v30h30v60H91v30h30v30h150v-30h-30v-30h-30v30h-60v-30h30v-30h-30zm0 0" />
      <Path d="M121 120h30v30h-30zm0 0M361 120h30v30h-30zm0 0" />
      <Path d="M391 210h60V60H301v150h60v30h30zm-60-30V90h90v90zm0 0M451 270v-30h-60v30zm0 0M361 360h30v30h-30zm0 0M241 330h30v30h-30zm0 0M181 360h30v-60h-30zm0 0M211 270h30v30h-30zm0 0M91 330H61v60h30v-60zm0 0M61 420h30v30H61zm0 0M241 60h30v30h-30zm0 0M241 180h30v-60h-30zm0 0M271 240v-30h-30v60h120v-30zm0 0" />
    </Svg>
  );
}

export default SvgQrCode;
