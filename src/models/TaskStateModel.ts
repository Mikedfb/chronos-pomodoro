import type { TaskModel } from './TaskModel';

export type TaskStateModel = {
  readonly tasks: TaskModel[];
  readonly secondsRemaining: number;
  readonly formattedSecondsRemaining: string;
  readonly activeTask: TaskModel | null;
  readonly currentCycle: number;
  readonly config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};
