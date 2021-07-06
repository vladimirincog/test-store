import { Сategory } from 'app/store/interfaces';
import { createAction, props} from '@ngrx/store';

export namespace UserActions {
  export const clickCategory = createAction('CLICK_CATEGORY');
  export const getCategorySuccess = createAction('GET_DATA_SUCCESS', props<{category: any}>());//Сategory[]
}