import type { TaskStateModel } from './TaskStateModel';

export type TaskModel = {
  readonly id: string;
  readonly name: string;
  readonly duration: number;
  readonly startDate: number;
  readonly completeDate: number | null;
  readonly interruptDate: number | null;
  readonly type: keyof TaskStateModel['config'];
};
