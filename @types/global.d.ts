import { PannellumContext } from "./PannellumContext";
import { PannellumSettingsProps } from "./PannellumSettingsProps";

declare global {
  interface Window {
    pannellum: {
      viewer: (id: string, config: PannellumSettingsProps) => PannellumContext;
    };
  }
}
