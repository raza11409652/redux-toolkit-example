import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getAllCoursesLoad,
  setSingleCourseAction,
} from '../../redux/slice/course.slice';

const AllCourses = ({navigation}) => {
  let {courses, singleCourse, loading} = useSelector(
    state => state.CourseReducer,
  );
  let dispatch = useDispatch();
  //   console.log(courses, singleCourse, loading);
  useEffect(() => {
    getCourses();
  });
  let getCourses = async () => {
    try {
      getAllCoursesLoad();
    } catch (er) {
      console.log(er);
    }
  };
  return (
    <>
      {courses.length > 0 &&
        courses.map(item => {
          return (
            <TouchableOpacity
              key={item['_id']}
              style={Style.header}
              onPress={() => {
                dispatch(setSingleCourseAction({course: item}));
                navigation.push('SINGLE_COURSE');
              }}>
              <Text>{item['sub_category_name']}</Text>
            </TouchableOpacity>
          );
        })}
    </>
  );
};
const Style = StyleSheet.create({
  header: {padding: 10, marginBottom: 10, color: '#222'},
});
export default AllCourses;
