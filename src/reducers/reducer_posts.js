
import {FETCH_POST} from '../actions';
export default function(state={},action){
  switch(action.type){
      case FETCH_POST:
      //console.log(action.payload.data);

    return _.mapKeys(action.payload.data,'id');

      default:
      return state;
  }

}
