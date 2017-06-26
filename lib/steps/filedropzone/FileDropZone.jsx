/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import DropzoneComponent from 'react-dropzone-component';

var componentConfig = {
  iconFiletypes: ['.mp4', '.avi', '.mkv', '.3gp'],
  postUrl: 'https://google.com/'

};
var djsConfig = { autoProcessQueue: true }

const FileDropZone = (props) => {

  const eventHandlers = {}

  return (
    <DropzoneComponent className='imgbrowser' config={componentConfig}
    eventHandlers={eventHandlers}
    djsConfig={djsConfig} />
  );
}

export default FileDropZone
