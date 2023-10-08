import React from 'react';
import CustomButton from './CustomButton';

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <div
        className={`flex-1 flex flex-col  `}
      >
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Click here to Upload Your Logo or Texture!
        </label>

        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === '' ? 'No file selected' : file.name}
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
