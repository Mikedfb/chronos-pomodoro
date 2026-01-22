import type { TaskStateModel } from '../../models/TaskStateModel';
import type { TaskActionModel } from './taskActions';

import { TaskActionTypes } from './taskActions';

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch (action.type) {
    case TaskActionTypes.START_TASK:
    case TaskActionTypes.INTERRUPT_TASK:
    case TaskActionTypes.RESET_STATE: {
      return state;
    }
    default:
      // Sempre deve retornar o estado
      return state;
  }
}
