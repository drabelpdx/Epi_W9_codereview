import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.belongsTo('question', {async: true}),
  text: DS.attr('string'),
  date: DS.attr('date')
});
