import { Category } from 'app/store/app.model';
import { createAction, props} from '@ngrx/store';

export namespace UserActions {
  export const clickCategory = createAction('CLICK_CATEGORY');
  export const getCategorySuccess = createAction('GET_DATA_SUCCESS', props<{categorys: Category[]}>());
}