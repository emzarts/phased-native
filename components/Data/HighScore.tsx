import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    // saving error
  }
}

const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value !== null) {
      return value;
    }
    return 0;
  } catch (e) {
    return 0;
    // error reading value
  }
}

const getHighScore = async () => {
  return await getData('highScore');
}

const storeScore = (score: number) => {
  getHighScore().then((curr_score) => {
    const high_score = curr_score === 0 ? curr_score : parseInt(curr_score);
    if (score > high_score) {
      storeData('highScore', score.toString());
    }
  });
}

export { getHighScore, storeScore };