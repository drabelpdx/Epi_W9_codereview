import Ember from 'ember';

var NewAnswerController = {
  needs: ['question'],
  actions: {
    saveAnswer: function() {
      var controller = this;
      var answer = this.store.createRecord('answer', {
        text: this.get('text'),
        name: this.get('name')
      });
      answer.save();

      var question = this.get('controllers.question.model');
      question.get('answers').pushObject(answer);
      question.save();

      this.setProperties({
        text: '',
        name: ''
      });

      this.transitionToRoute('question', question.id);
    }
  }
};

export default Ember.ObjectController.extend(NewAnswerController);
