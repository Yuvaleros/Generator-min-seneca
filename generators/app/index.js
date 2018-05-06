const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'serviceName',
        message: 'Your microservice name',
        default: this.appname, // Default to current folder name
        store: true
      },
      {
        type: 'input',
        name: 'listenPort',
        message: 'What port are you listening on?',
        default: this.appname, // Default to current folder name
        store: true
      },
      {
        type: 'input',
        name: 'clientPort',
        message: 'What port are you is the client on?',
        default: this.appname, // Default to current folder name
        store: true
      }
    ]).then(answers => {
      this.log('microservice name', answers.serviceName);
      this.fs.copyTpl(
        this.templatePath('./**/*'),
        this.destinationPath('./' + answers.serviceName),
        {
          listenPort: answers.listenPort,
          clientPort: answers.clientPort,
          serviceName: answers.serviceName
        }
      );
    });
  }

  installingDep() {
    this.npmInstall(['seneca', 'seneca-basic', 'seneca-entity', 'app-config']);
    this.npmInstall(['mocha', 'chai'], { 'save-dev': true });
  }
};
