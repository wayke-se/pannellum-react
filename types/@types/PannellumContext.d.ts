export interface PannellumContext {
    destroy: () => void;
    on: (name: string, callback: any) => void;
}
