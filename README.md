# Readme Generator

![image](https://img.shields.io/badge/license-MIT%20License-green)

## Table of Contents

1. <a href="#description">Description</a>
2. <a href="#installation">Installation</a>
3. <a href="#usage">Usage</a>
4. <a href="#contributions">Contributions</a>
5. <a href="#license">License</a>
6. <a href="#test">Tests</a>
7. <a href="#questions">Issues and Questions</a>
<hr>
<h3 id='description'>Description</h3>
Quickly generates a readme based upon user input and a pre-defined template. Simply run the program and answer the prompts, and a template will be generated. The template includes a table of contents with linked sections and a license badge. See https://youtu.be/G-kk2_u-25k for a quick demonstration video. The file 'boilerplate-installation-instructions.txt' also includes some common phrases to be copied and pasted into a readme.
See sample-readme.md for a sample readme. This readme (the one you are reading right now!) was also generated using this program.

![image](https://user-images.githubusercontent.com/64618290/90838156-f81b3e80-e308-11ea-9744-caac9d30ef29.png)

<h3 id='installation'>Installation</h3>
Make sure that node.js is installed first. Navigate to the program folder in the terminal. Then, run "npm install" to install dependencies - in this case, inquirer.

<h3 id='usage'>Usage</h3>
<p>In the terminal, enter "node index.js" to run the program. Simply answer the prompts. The readme file, written in markdown format, will then be created in a folder entitled "output". The output folder will be located in the same directory as the program, index.js. If the output folder does not yet exist, it will be created. Use the editor of your choice to further customize the readme as desired. Be mindful that the program will overwrite current readmes in the "output" folder if the readme files have the same name! Keeping this in mind, remember to relocate the newly output readme to the directory of your choice.</p>

<p>The readme generator will automatically generate a linked table of contents as well as sections containing answers to the prompts. When the program is run, prompts may be skipped by simply not typing anything and pressing 'enter'. In that case, the readme generator will not include that section in the readme. If you would still like to include a section in the readme, but would like to leave it blank, simply type a blank space ' ' at the appropriate prompt then press enter.</p>

<p> For example, the readme generator will prompt 'What are the installation instructions?' Pressing enter without typing anything will cause the installation section not to be included in the generated readme.</p>

<p>Finally, the file 'boilerplate-install-instructions.txt' also includes some common phrases such as "Run 'npm install' in the project directory to install files listed in package.json." These may be copied and pasted as appropriate.</p>

<h3 id='contributions'>Contributions</h3>
Contact the author through GitHub or email with suggestions and comments.

<h3 id='license'>License</h3>
This project is licensed under the MIT License.

<h3 id='test'>Tests</h3>
There are options to create test readmes named "dev-test-readme.md", or "other-test-readme.md", rather than "README.md". This can be useful if you don't want to overwrite your current README.md file, or you would like to experiment with the template.

<h3 id='questions'>Issues and Questions</h3>
Issues and questions can be emailed to 'kmillergit' at the domain 'outlook.com'. The author's GitHub profile may be found at https://github.com/Koldenblue.

<p><sub><sup>This readme was generated with the help of the readme generator program at https://github.com/Koldenblue/readme-generator.</sup></sub></p>
