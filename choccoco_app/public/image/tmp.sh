#!/bin/sh
INC=1
while read line
do
    mv "$line" $INC.jpg
    INC=`expr $INC + 1`
done < list
