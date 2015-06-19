import DS from 'ember-data';

export default DS.Model.extend({
  answers: DS.hasMany('answer', {async: true}),
  asked: DS.attr('string'),
  description: DS.attr('string'),
  author: DS.attr('string')
});
