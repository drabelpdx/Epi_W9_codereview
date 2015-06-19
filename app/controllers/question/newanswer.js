import Ember from 'ember';

var NewAnswerController = {
  needs: ['question'],
  actions: {
    saveAnswer: function() {
      var today = new Date();
      var newAnswer = this.store.createRecord('answer', {
        text: this.get('text'),
        name: this.get('name'),
        date: today,
      });
      newAnswer.save();

      var question = this.get('controllers.question.model');
      question.get('answers').pushObject(newAnswer);
      question.save();

      this.setProperties({
        text: ''
      });

      this.transitionToRoute('question', question.id);
    }
  }
};

export default Ember.ObjectController.extend(NewAnswerController);
