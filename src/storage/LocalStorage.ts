import AsyncStorage from '@react-native-async-storage/async-storage';

interface ISave{
    key:string;
    value:any;
    parse:boolean;
}

interface IGet{
    key:string;
    unparse:boolean;
}

export async function save({ key, value, parse }:ISave) {
  try {
    const stringValue = parse ? JSON.stringify(value) : value;
    await AsyncStorage.setItem(key, stringValue);
    return { success: true };
  } catch (error) {
    // Handle error
    return { success: false, error };
  }
}

export async function get({ key, unparse }:IGet) {
  try {
    let value = await AsyncStorage.getItem(key);
    if (!value) { value = ''; }
    const data = unparse ? JSON.parse(value) : value;
    return { success: true, data };
  } catch (error) {
    //   Handle error
    return { success: false, error };
  }
}
