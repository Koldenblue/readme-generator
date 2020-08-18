// function to generate markdown for README
function generateMarkdown(data) {
  return "# " + data.title + "\n\n"
    + "## Table of Contents\n"
    + `\n1.<a href="#description">Description</a>\n`
    + `\n<a href="#installation">Installation</a>\n` 
    + `\n<a href="#usage">Usage</a>\n`
    + `\n<a href="#contributions">Contributions</a>\n`
    + `\n<a href="#license">License</a>\n`
    + `\n<a href="#test">Tests</a>\n`
    + `\n<a href="#questions">Issues and Questions</a>\n\n`

    + "<h3 id='description'>Description</h3>\n" + data.description + "\n\n"
    + "<h3 id='installation'>Installation\n" + data.installation + "\n\n"
    + "<h3 id='usage'>Usage\n" + data.usage + "\n\n"
    + "<h3 id='contributions'>Contributions\n" + data.contributions + "\n\n"
    + "<h3 id='license'>License\n" + data.license + "\n\n"
    + "<h3 id='test'>Tests\n" + data.test + "\n\n"
    + "<h3 id='questions'>Issues and Questions\n"
    + `Issues and questions can be directed to ${data.email}. `
    + `The author's GitHub profile may be found at https://github.com/${data.username}.`;
}

module.exports = {
  generateMarkdown
};

// Can also do:
/*
export default {
  generateMarkdown
};
*/