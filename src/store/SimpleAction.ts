export interface SimpleAction<T> {
  type: string;
  payload: T | null;
}