/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    firstName: {
      type: 'string',
      required: true
    },
    lastName: {
      type: 'string',
      required: true
    },
    birthDate: {
      type: 'date',
      required: true
    },
    email: {
      type: 'string',
      required: true
    },
    gender: {
      type: 'string'
    }

  }
};

