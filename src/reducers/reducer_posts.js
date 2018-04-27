
import {FETCH_POST} from '../actions';
const INITIAL_STATE = { all: [], post: null };
export default function(state={},action){
  switch(action.type){
      case FETCH_POST:
      //console.log(action.payload.data);
 //return { ...state, all: action.payload.data };
  return _.mapKeys(action.payload.data,'id');
  //  return action.payload.data
      default:
      return state;
  }

}
