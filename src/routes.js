const {
  addingBooks,
  gettingALLBooks,
  getingSpecifiedBooks,
  editingSpecifiedBooks,
  deletingSpecifiedBooks,
}
= require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addingBooks,
  },
  {
    method: 'GET',
    path: '/books',
    handler: gettingALLBooks,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getingSpecifiedBooks,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editingSpecifiedBooks,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deletingSpecifiedBooks,
  },
];

module.exports = routes;
