angular.module('rangular')
    .controller('QuestionIndexCtrl', ['$scope', '$http', function ($scope, $http) {
        $http.get('/api/questions')
          .success(function (data) {
            $scope.questions = data;
          })
          .error(function (data) {
            alert("Error error  .. . beep boop. Message: " + data)
          })

        $scope.createPost = function() {
          $http.post('/api/questions', $scope.question)
            .success(function (data) {
              $scope.question.content = '';
              $scope.questions.unshift(data);
            })
            .error(function (data) {
              alert("Error error  .. . beep boop. Message: " + data)
            })
        };

    }]);