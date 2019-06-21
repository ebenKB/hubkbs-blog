import JSONAPISerializer from 'jsonapi-serializer';


// const options = {

// }
// export default new JSONAPISerializer.Serializer('post', {
//   attributes: ['title', 'body', 'image', 'createdAt', 'updatedAt', 'likes'],
// relationshipMeta:
// });


export default new JSONAPISerializer.Serializer('post', {
  attributes: ['title', 'body', 'image', 'createdAt', 'updatedAt', 'likes', 'user'],
  user: {
    included: false,
    ref(post, user) {
      return user.id;
    },
    attributes: ['firstname', 'lastname', 'email', 'contact', 'username'],
    relationshipLinks: '',
  },
});
