module.exports = class Notification {
  constructor(fetchMethod, updateMethod, event){
    this.fetchMethod = fetchMethod;
    this.updateMethod = updateMethod;
    this.event = event;
  }
};
