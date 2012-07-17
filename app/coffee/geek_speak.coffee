geekSpeakModule = angular.module('GeekSpeak', []);
 
# configure the module.
# in this example we will create a greeting filter
geekSpeakModule.filter 'greet', -> (name)-> 'Hello, ' + name + '!'

