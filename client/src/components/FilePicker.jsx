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
        style={{ width: '160px', height: '140px' }}
      >
        <input id="file-upload" type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} {...getInputProps()} />
        <label htmlFor="file-upload" className="filepicker-label">
          {isDragActive ? 'Drop the image here' : 'Click here or drop an image to upload'}
        </label>

        <p className="mt-2 text-gray-500 text-xs truncate">
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
