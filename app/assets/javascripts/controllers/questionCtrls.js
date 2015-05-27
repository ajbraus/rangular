/*
 *  QUESTIONCTRLS.JS
 */

angular.module('rangular')
    .controller('QuestionIndexCtrl', ['$scope', '$http', 'Question', function ($scope, $http, Question) {
        // $scope.questions = Question.all();

        $http.get('http://localhost:3000/api/questions.json')
          .success(function (data) {
            console.log(data);
            $scope.questions = data;
          })
          .error(function (data) {
            console.log("error: " + data);
          })
    }]);