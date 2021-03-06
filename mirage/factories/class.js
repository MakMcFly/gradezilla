import {
  Factory,
  faker,
} from 'ember-cli-mirage';

const classNames = ['Math 101', 'English 101', 'Dream Studies', 'Super Mario Studies 102', 'History of Soup', 'English 102'];

export default Factory.extend({
  id() {
    return faker.random.uuid();
  },
  className(i) {
    return classNames[i];
  },

  afterCreate(classObject, server) {
    server.createList('assignment', 5, {
      className: classObject.attrs.className,
    });
  }
});
