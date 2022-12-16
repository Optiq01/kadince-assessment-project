export type TaskType = 'pending' | 'complete';

export type FilterType = 'pending' | 'complete' | 'all';

export interface TaskStatusInterface{
    totalTasks     : number;
    completedTasks : number;
    pendingTasks   : number;
}

export interface TaskInterface{
    id         : string;
    task       : string;
    status     : TaskType;
}

export interface ToDoItemInterface{
    id          : string;
    title       : string;
    description : string;
    tasks       : TaskInterface[];
    status      : TaskType;
    taskStatus  : TaskStatusInterface;
}