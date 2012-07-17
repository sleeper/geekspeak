class @ProposedTalksCtrl
  constructor: (@$scope, @$log) ->
    #		@setupXhr()
    #    @initRoutes()
#		@session = new @SessionService()
    # flag for showing / hiding debugging outputs within any views
    @debug = false
    @$scope.talks = [
      {
       name: "My wonderfull kitchen"
       presenter: "Fred"
       proposed_by: "Julien"
       selected: true
      }
      {
       name: "Another one"
       presenter: "Fred"
       proposed_by: "Julien"
       selected: false
      }
      {
       name: "Super Killer prez"
       presenter: "Julien"
       proposed_by: "Fred"
       selected: false
      }
    ]

  # routes handling
#  initRoutes:(routes)->
    #    @$route.when '/login',
    #  template: 'login.html',
    #  controller: LoginCtrl

    #    @$route.when '/proposedtalks',
    #      template: 'proposed.html',
    #      controller: ProposedTalksCtrl
    #
    #    @$route.when '/proposedtalks/ned',
    #      template: 'proposed.html'
    #      controller: CreateProposedTalkCtrl
    #
    #    @$route.when '/proposed_talks/:talk_id/edit',

    #    @$route.otherwise( redirectTo: '/login' )

    #@$route.parent @

