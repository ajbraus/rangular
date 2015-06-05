angular.module('rangular.controllers', [])
  .controller('QuestionIndexCtrl', ['$scope', 'Question', function ($scope, Question) {
      $scope.questions = Question.query();

      $scope.question = {};
      $scope.createQuestion = function() {
        var question = Question.save($scope.question)
        $scope.question = {};
        $scope.questions.push(question)
      }
  }]);