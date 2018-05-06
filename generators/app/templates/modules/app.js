"use strict";
module.exports = function harvester() {
  let run = (msg, respond) => {
    respond();
  };

  this.add('role:service,cmd:run', run);
};
