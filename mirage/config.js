export default function () {
  this.loadFixtures();

  this.namespace = '/api';

  this.get('/gradezilla/v1/assignments', (schema, request) => {
    var query = request.queryParams;

    return schema.assignments.where(query);
  }, {
    timing: 1000
  });

  this.post('/gradezilla/v1/assignments', {
    timing: 1000
  });

  this.put('gradezilla/v1/assignments/:id', {
    timing: 1000
  });

  this.delete('gradezilla/v1/assignments/:id', {
    timing: 1000
  });

  // this.get('/gradezilla/v1/classes', {
  //   timing: 1000
  // });

  this.get('/gradezilla/v1/classes', (schema, request) => {
    var query = request.queryParams;

    return schema.classes.where(query);
  }, {
      timing: 1000
    });
}
