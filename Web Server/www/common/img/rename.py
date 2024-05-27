from shutil import copyfile
from os import rename
from glob import glob

newDir = ""
fileList = glob(newDir+"*")
for i in range(len(fileList)):
    tempPos = fileList[i].find('[')
    extPos = fileList[i].find('.')
    if tempPos >= 0:
        print(fileList[i][:tempPos]+fileList[i][extPos:])
        rename(fileList[i],fileList[i][:tempPos]+fileList[i][extPos:])
    
