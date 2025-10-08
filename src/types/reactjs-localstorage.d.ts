declare module "reactjs-localstorage" {
  export const reactLocalStorage: {
    get: (key: string) => string | undefined;
    set: (key: string, value: any) => void;
    remove: (key: string) => void;
    clear: () => void;
  };
}
