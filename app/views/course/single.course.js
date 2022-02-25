import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
const SingleCourse = () => {
  let {courses, singleCourse, loading} = useSelector(
    state => state.CourseReducer,
  );
  console.log(singleCourse['image']);
  return (
    <>
      {singleCourse && (
        <>
          <Text>Single screen</Text>
          <Image
            source={{uri: singleCourse['image']}}
            style={Style.image}
            resizeMethod="resize"
            resizeMode="contain"
          />
        </>
      )}
    </>
  );
};
const Style = StyleSheet.create({
  image: {width: 600, height: 400},
});
export default SingleCourse;
