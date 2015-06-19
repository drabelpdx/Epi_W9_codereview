import Ember from 'ember';

var NewQuestionController = {

  actions: {
    saveQuestion: function() {
      var newQuestion = this.store.createRecord('question', {
        asked: this.get('asked'),
        description: this.get('description'),
        author: this.get('author')
      });

      newQuestion.save();
      this.setProperties({
        asked: '',
        description: '',
        author: ''
      });

      this.transitionToRoute('questions');
    }
  }
};

export default Ember.ObjectController.extend(NewQuestionController);
