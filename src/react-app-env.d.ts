/// <reference types="react-scripts" />

type RemoveProps<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
