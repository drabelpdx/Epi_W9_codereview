import Ember from 'ember';

var QuestionController = {
  needs: ['question'],

  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);
      var asked = this.get('model');
      var question = this.get('controllers.question.model');
      asked.save();
    },
    delete: function() {
      if (confirm('Are you sure?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      }
    }
  }
};

export default Ember.ObjectController.extend(QuestionController);
