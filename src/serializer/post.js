import JSONAPISerializer from 'jsonapi-serializer';

export default new JSONAPISerializer.Serializer('post', {
  attributes: ['title', 'body', 'image', 'createdAt', 'updatedAt', 'likes', 'author'],
});
