import axios from '../axios';
export const getAllCourses = async () => {
  try {
    let {data} = await axios.get('allcourses');
    return data;
  } catch (er) {
    throw new Error(er);
  }
};
