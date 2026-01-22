// C:\Users\jack9\OneDrive\바탕 화면\madeit\airbnb_습작\airbnb-booking\public\images
// 위 경로에 있는 이미지 파일들의 이름을 에어비앤비1.jpg, 에어비앤비2.jpg, ... , 에어비앤비8.jpg ... 로 변경하는 함수
// node.js 로 만들것

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const renameImages = (directory: string) => {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error('디렉토리를 읽는 중 오류 발생:', err);
      return;
    }
    files.forEach((file, index) => {
      const ext = path.extname(file);
      const newFileName = `에어비앤비${index + 1}${ext}`;
        const oldPath = path.join(directory, file);
        const newPath = path.join(directory, newFileName);
        fs.rename(oldPath, newPath, (renameErr) => {
          if (renameErr) {
            console.error(`파일 이름 변경 중 오류 발생 (${file}):`, renameErr);
            } else {
            console.log(`파일 이름 변경 완료: ${file} -> ${newFileName}`);
            }
        });
    });
  });
}

const imagesDirectory = path.join(__dirname, 'assets');
renameImages(imagesDirectory);