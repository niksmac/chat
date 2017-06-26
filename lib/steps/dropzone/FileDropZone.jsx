/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import DropzoneComponent from 'react-dropzone-component';

var componentConfig = {
  iconFiletypes: ['.jpg', '.png', '.gif'],
};
var djsConfig = { autoProcessQueue: true }

const FileDropZone = (props) => {
  return (
    <DropzoneComponent className='imgbrowser' config={componentConfig}
    eventHandlers={eventHandlers}
    djsConfig={djsConfig} />
  );
}

export default FileDropZone
