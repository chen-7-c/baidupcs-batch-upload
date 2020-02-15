// const inputdir = `D:/baidupandownload/微博美图相册-2020-02-13`;
// const destdir = `/!我的图片-2020-02-10/微博美图相册-2020-02-13`;

import path, { posix } from "path";
import process from "process";
import findfile from "./findfiles.js";
import { upload } from "./uploadfile.js";
import os from "os";
export const cmd =
    "win32" === os.platform() ? "BaiduPCS-Go.exe" : "BaiduPCS-Go";
process.on("unhandledRejection", e => {
    throw e;
});
let 总数 = 0;
let 完成数 = 0;

/**
 * 
 * 
 *@param {string} inputdir
 *@param {string} destdir
 *@param {boolean} reverse

 *  */

const start = async (inputdir, destdir, reverse = false) => {
    const filedatas = await findfile(path.resolve(inputdir));
    总数 = filedatas.length;
    console.log("找到文件" + filedatas.length + "个");
    console.log(JSON.stringify(filedatas, null, 4));
    const 输入目录名 = path.basename(inputdir);
    const filelist = reverse ? filedatas.reverse() : filedatas;
    filelist.forEach(
        /**
         * @param {string} file
         */
        async file => {
            // 给上传目标文件夹添加了输入文件夹的名字
            /*
             */
            const destination = posix.dirname(
                posix
                    .resolve(destdir, 输入目录名, path.relative(inputdir, file))
                    .replace(/\\/g, "/")
            );
            await upload(file, destination);
            完成数++;
            console.log("完成进度:", `${完成数} / ${总数}`);
        }
    );
};
export { start };
