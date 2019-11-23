# @Author: scottxiong
# @Date:   2019-11-23 16:55:08
# @Last Modified by:   scottxiong
# @Last Modified time: 2019-11-23 16:59:16
#!/bin/bash
git clone git@github.com:scott-x/exam.git
mv exam/build/* ./
rm -rf exam
echo "部署完毕"