<div id="cats-app" ng-controller="catsController">
  <div class="cat" ng-repeat="cat in cats">
    <h2>{{cat.node.title}}</h2>
    <div class="body">
      {{cat.node.Body}}
    </div>
    <div class="image">
      <img src="{{cat.node.Image}}">
    </div>
  </div>
</div>
