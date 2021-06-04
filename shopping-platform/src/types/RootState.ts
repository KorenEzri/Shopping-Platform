import { CartState } from 'app//slice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly
import { SpinnerShow } from '../app/components/Spinner/slice/types';

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
  cart?: CartState;
  spinner_show?: SpinnerShow;
}
