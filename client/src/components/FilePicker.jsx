import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

import CustomButton from './CustomButton';

const FilePicker = ({ file, setFile, readFile }) => {
  const [isDragActive, setIsDragActive] = useState(false);

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isDragActive: isDragActiveDropzone } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: false,
    onDragEnter: () => {
      setIsDragActive(true);
    },
    onDragLeave: () => {
      setIsDragActive(false);
    },
  });

  return (
    <div className="filepicker-container">
      <div
        className={`flex-1 flex flex-col ${isDragActiveDropzone ? 'drag-active' : ''}`}
        {...getRootProps()}
      >
        <label htmlFor="file-upload-input" className="filepicker-label">
          {isDragActive ? 'Drop your image here' : 'Click here or Drop your image here to upload!'}
        </label>
        <span className='mt-2 text-gray-800 text-xs flex flex-wrap gap-3 justify-center'>Uploaded file:</span>
        <p className="mt-2 text-gray-900 text-xs truncate">
          {file === '' ? 'No Image Selected' : file.name}
        </p>
      </div>

      <div className="flex flex-wrap gap-3 justify-center">
        <CustomButton type="outline" title="Logo" handleClick={() => readFile('logo')} CustomStyles="text-xs" />
        <CustomButton type="filled" title="Texture" handleClick={() => readFile('full')} CustomStyles="text-xs" />
      </div>
    </div>
  );
};

export default FilePicker;
