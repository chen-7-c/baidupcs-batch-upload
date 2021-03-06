# baidupcs-batch-upload

https://github.com/iikira/BaiduPCS-Go

使用 `baidupcs-go`,百度网盘批量上传文件,高并发支持

在上传超过几百个文件时，速度快得多

给上传操作限流,防止打开过多报错,默认最多同时运行 15 个上传进程,可传参更多并发上传数

如果遇到 几 种网络问题上传失败,则自动重试，比直接用 一个 `BaiduPCS-Go` 命令上传更快

解决了上传文件有小概率上传未成功，但`baidupcs-go`返回上传成功的问题，

解决思路：使用`upload`上传完文件之后，使用`meta`命令，检查文件是否存在于网盘中，然后重传失败的文件

# 目前适配的版本

BaiduPCS-Go version v3.6.2

BaiduPCS-Go-v3.6.2-windows-x64

下载网址

https://github.com/masx200/baidupcs-batch-upload/releases/download/1.1.5/BaiduPCS-Go-v3.6.2-windows-x64.zip

https://github.com/felixonmars/BaiduPCS-Go/releases/tag/v3.6.2

https://github.com/masx200/baidupcs-batch-upload/releases/download/1.1.8/BaiduPCS-Go.arm64.android-v3.6.2-devel.rar

# 使用方法

安装

```shell
npm i -g @masx200/baidupcs-batch-upload
```

或者

```shell
yarn global add @masx200/baidupcs-batch-upload
```

## 安装 `node_modules`

```shell
yarn install
```

## 编译脚本

```shell
yarn build
```

## 运行脚本

```shell
yarn start
```

# 使用之前先登陆

```shell
BaiduPCS-Go login
```

# 命令行示例

必选参数 `input`:类型`string`,输入本地文件目录

必选参数 `dest`:类型`string`,上传到的网盘文件目录

可选参数`concurrent`:类型`number`,同时并发的上传文件个数

```shell

npx @masx200/baidupcs-batch-upload  --input=D:/baidupandownload/图片输入本地 --dest=/baidupandownload/图片输出网盘
```

```shell
npx @masx200/baidupcs-batch-upload --input=D:/baidupandownload/图片输入本地 --dest=/baidupandownload/图片输出网盘 --concurrent=20
```

对于 windows 系统,

如果是带空格的本地目录/网盘目录场景,

可以使用如下命令:

```powershell

baidupcs-batch-upload.cmd --input="d:\2 2" --dest="/test/t s" --concurrent=20
```
