import {getAllCourses} from '../../api/courses';

const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit');
const initialState = {
  courses: [],
  singleCourse: null,
  loading: false,
};
/**
 * export const getMaintenance = createAsyncThunk(
    "getMaintenance",
    async ({page, size,property}, {rejectWithValue}) => {
        // console.log(page,size,property);
        try{
            const response =await getMaintenancesApi({page,size,property})
            // const response = await getPropertiesApi({page, size})
            // console.log(response)
            if (!response || response.error) {
                return rejectWithValue("Fetch Data API Failed");
            }
    
            return {
                // response:response?.response
                totalPages: response?.response?.totalPages,
                currentPage: response?.response?.currentPage,
                maintenance: response?.response?.item || []
    
            };
        }catch(e){
            return rejectWithValue("Fetch Data API Failed"); 
        }
    }
)
 */
export const getAllCoursesLoad = createAsyncThunk(
  'getAllCoursesLoad',
  async ({filter}, {rejectWithValue}) => {
    try {
      console.log('HELE');
      let data = getAllCourses();
      return data;
    } catch (e) {
      return rejectWithValue('Fetch Data API Failed');
    }
  },
);
const courseSlice = createSlice({
  initialState,
  name: 'course',
  extraReducers: {
    [getAllCoursesLoad.pending]: state => {
      console.log('PENDING');
      state.loading = true;
    },
    [getAllCoursesLoad.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
    [getAllCoursesLoad.rejected]: state => {
      console.log('REJECTED');
      state.loading = false;
    },
  },
  reducers: {
    setSingleCourseAction: (state, action) => {
    //   console.log({action});
      state.singleCourse = action.payload.course;
    },
    setAllCoursesAction: (state, action) => {
      state.courses = action.payload?.courses || [];
    },
  },
});
export const {setSingleCourseAction, setAllCoursesAction} = courseSlice.actions;

export default courseSlice.reducer;
