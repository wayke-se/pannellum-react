import React, { useRef, useState } from 'react';
import './pannellum/css/pannellum.css';
import './pannellum/css/style-textInfo.css';

import './pannellum/js/libpannellum.js';
import './pannellum/js/pannellum.js';
import './pannellum/js/RequestAnimationFrame';
import { PannellumSettingsProps } from '../@types/PannellumSettingsProps';
import { PannellumContext } from '../@types/PannellumContext';

declare global {
  interface Window {
    pannellum: {
      viewer: (id: string, config: PannellumSettingsProps) => PannellumContext;
    };
  }
}

const resolveSettings = (props: PannellumProps) => {
  const jsonConfig: PannellumSettingsProps = {
    panorama: props.panorama,
    preview: props.preview ?? '',
    haov: props.haov ?? 360,
    vaov: props.vaov ?? 180,
    vOffset: props.vOffset ?? 0,
    yaw: props.yaw ?? 0,
    pitch: props.pitch ?? 0,
    hfov: props.hfov ?? 100,
    minHfov: props.minHfov ?? 50,
    maxHfov: props.maxHfov ?? 150,
    minPitch: props.minPitch ?? -90,
    maxPitch: props.maxPitch ?? 90,
    minYaw: props.minYaw ?? -180,
    maxYaw: props.maxYaw ?? 180,
    autoRotate: props.autoRotate ?? 0,
    compass: props.compass ?? false,
    previewTitle: props.previewTitle,
    previewAuthor: props.previewAuthor,
    author: props.author,
    title: props.title,
    autoLoad: props.autoLoad ?? false,
    orientationOnByDefault: props.orientationOnByDefault ?? false,
    showZoomCtrl: props.showZoomCtrl ?? true,
    doubleClickZoom: props.doubleClickZoom ?? true,
    keyboardZoom: props.keyboardZoom ?? true,
    mouseZoom: props.mouseZoom ?? true,
    draggable: props.draggable ?? true,
    disableKeyboardCtrl: props.disableKeyboardCtrl ?? false,
    showFullscreenCtrl: props.showFullscreenCtrl ?? true,
    showControls: props.showControls ?? true,
    onLoad: props.onLoad,
    onScenechange: props.onScenechange,
    onScenechangefadedone: props.onScenechangefadedone,
    onError: props.onError,
    onErrorcleared: props.onErrorcleared,
    onMousedown: props.onMousedown,
    onMouseup: props.onMouseup,
    onTouchstart: props.onTouchstart,
    onTouchend: props.onTouchend,
    onRender: props.onRender ?? null,
  };
  return jsonConfig;
};

type PannellumProps = PannellumSettingsProps & {
  panorama: string;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
};

const Pannellum = (props: PannellumProps) => {
  const panoramaRef = useRef<PannellumContext | undefined>();
  const [id] = useState(
    () => props.id || `pannellum-${Math.random().toString(36).substring(2, 9)}`
  );

  const renderImage = () => {
    const jsonConfig = resolveSettings(props);

    if (panoramaRef.current) {
      panoramaRef.current.destroy();
    }
    panoramaRef.current = window.pannellum.viewer(id, jsonConfig);
  };

  return <div ref={() => renderImage()} id={id} className={props.className} style={props.style} />;
};

export default Pannellum;
