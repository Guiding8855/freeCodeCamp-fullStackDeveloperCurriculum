#!/bin/bash

# Set the name of the new directory
echo "This program creates a new directory in the current directory and empty script.js file inside it for web development."
echo "" 
echo "A new directory will be created in:" $PWD
read -p "New directory name: " dirName

echo "Creating directory..."
mkdir $dirName

# Navigate into the directory and create the standard files
echo "Creating files..."
touch $dirName/script.js