import React from "react";
import "./pannellum/css/pannellum.css";
import "./pannellum/css/style-textInfo.css";
import "./pannellum/js/libpannellum.js";
import "./pannellum/js/pannellum.js";
import "./pannellum/js/RequestAnimationFrame";
import { PannellumSettingsProps } from "../@types/PannellumSettingsProps";
import { PannellumContext } from "../@types/PannellumContext";
declare global {
    interface Window {
        pannellum: {
            viewer: (id: string, config: PannellumSettingsProps) => PannellumContext;
        };
    }
}
type PannellumProps = PannellumSettingsProps & {
    panorama: string;
    id?: string;
    className?: string;
    style?: React.CSSProperties;
};
declare const Pannellum: (props: PannellumProps) => JSX.Element;
export default Pannellum;
