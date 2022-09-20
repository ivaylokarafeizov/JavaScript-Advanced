function createAssemblyLine() {
  return {
    hasClima: (myCar) => {
      myCar.temp = 21;
      myCar.tempSettings = 21;
      myCar.adjustTemp = () => {
        if (myCar.temp < myCar.tempSettings) {
          myCar.temp++;
        } else if (myCar.temp > myCar.tempSettings) {
          myCar.temp--;
        }
      };
    },
    hasAudio: (myCar) => {
      myCar.currentTrack = { name: '', artist: '' };
      myCar.nowPlaying = () => {
        if (myCar.currentTrack !== null) {
          console.log(
            `Now playing '${myCar.currentTrack.name}' by ${myCar.currentTrack.artist}`
          );
        }
      };
    },
    hasParktronic: (myCar) => {
      myCar.checkDistance = (distance) => {
        if (distance < 0.1) {
          console.log('Beep! Beep! Beep!');
        } else if (distance >= 0.1 && distance < 0.25) {
          console.log('Beep! Beep!');
        } else if (distance >= 0.25 && distance < 0.5) {
          console.log('Beep!');
        } else {
          console.log('');
        }
      };
    },
  };
}

const assemblyLine = createAssemblyLine();

const myCar = {
  make: 'Toyota',
  model: 'Avensis',
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;  
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};  
assemblyLine.hasParktronic(myCar); 

console.log(myCar);