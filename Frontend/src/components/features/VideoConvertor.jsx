import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function VideoConverter() {
  const [files, setFiles] = useState([]);
  const [formats, setFormats] = useState({});
  const [convertedFiles, setConvertedFiles] = useState({});
  const [isConverting, setIsConverting] = useState({});

  
  const navigate = useNavigate();

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: acceptedFiles => {
      setFiles([...files, ...acceptedFiles]);
    }
  });

  const handleFormatChange = (e, index) => {
    const newFormats = { ...formats, [index]: e.target.value };
    setFormats(newFormats);
  };

  const handleConvert = async (file, index) => {
    const format = formats[index];
    if (!format) {
      alert(`Please select a format for ${file.name}`);
      return;
    }

    setIsConverting(prev => ({ ...prev, [index]: true }));

    const formData = new FormData();
    formData.append('file', file);
    formData.append('format', format);

    try {
      const response = await axios.post('/video/convert', formData, {
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      setConvertedFiles(prev => ({ ...prev, [index]: url }));
    } catch (error) {
      console.error(`Error converting file ${file.name}:`, error);
    } finally {
      setIsConverting(prev => ({ ...prev, [index]: false }));
    }
  };

  const handleGoBack = () => {
    navigate('/home');
  };

  return (
    <div className="container mx-auto p-4">

<div className="flex justify-start mb-4">
        <button
          onClick={handleGoBack}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Go Back
        </button>
        </div>

      <section className="border-dashed border-4 border-gray-500 p-8 rounded-md bg-gray-100">
        <div {...getRootProps({ className: 'dropzone text-center cursor-pointer' })}>
          <input {...getInputProps()} />
          <p className="text-gray-600">Drag & drop files here, or click to select files</p>
        </div>
      </section>

      <div className="mt-8">
        <h4 className="text-lg font-semibold mb-4">Files</h4>
        <ul>
          {files.map((file, index) => (
            <li key={index} className="mb-6">
              <div className="border border-gray-300 rounded-md p-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{file.name}</span>
                  <span className="text-sm text-gray-500">{(file.size / 1024).toFixed(2)} KB</span>
                </div>
                <div className="mt-4 flex items-center">
                  <label htmlFor={`format-${index}`} className="mr-2">Convert to:</label>
                  <select
                    id={`format-${index}`}
                    value={formats[index] || ''}
                    onChange={(e) => handleFormatChange(e, index)}
                    className="p-2 border border-gray-400 rounded mx-2"
                  >
                    <option value="">Select Format</option>
                    <option value="mp4">MP4</option>
                    <option value="avi">AVI</option>
                    <option value="mov">MOV</option>
                    <option value="mkv">MKV</option>
                    <option value="flv">FLV</option>
                    <option value="webm">WEBM</option>
                    <option value="wmv">WMV</option>
                  </select>
                  <button
                    className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${isConverting[index] ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={() => handleConvert(file, index)}
                    disabled={isConverting[index]}
                  >
                    {isConverting[index] ? 'Converting...' : 'Convert'}
                  </button>
                  {convertedFiles[index] && (
                    <a
                      href={convertedFiles[index]}
                      download={`converted-${file.name.replace(/\.[^.]+$/, '')}.${formats[index]}`}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4"
                    >
                      Download
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default VideoConverter;
