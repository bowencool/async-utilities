export type PlainObject = Record<string, any>;
export type PlainObjectOf<T> = Record<string, T>;

export function isPlainObject(obj: any): obj is PlainObject {
  return obj && obj.constructor === Object;
}

export function error2String(err: unknown) {
  if (typeof err === 'string') {
    return err;
  }
  if (err instanceof Error) {
    return `${err.name}: ${err.message}`;
  }
  if (isPlainObject(err)) {
    if (typeof err.msg === 'string') {
      return err.msg;
    }
    if (typeof err.message === 'string') {
      return err.message;
    }
  }
  return JSON.stringify(err);
}
