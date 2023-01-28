#!/bin/bash

read -p 'Enter file name :' fileName

if [ -f $fileName ]; then
  # file exists
  echo "Running TypeScript file: $fileName"
   tsc './'$fileName
  node ${fileName%.*}.js
else
  # file does not exist
  echo "Error: $fileName not found"
fi

