/*
 * angular-ads-directive v0.1.0
 * (c) 2013 Olajide Ogundipe Jr http://olaji.de
 * License: MIT
 */

angular.module('angular-ads', [])
    .directive('ogAds', function(){
    var adTemplate = "<div class='angular-ads' ng-cloak>"+ 
        "<div class='og-ad' ng-repeat='ad in ads'>" +
        "<div class='og-ad-header' ng-class='{adborder:{{!$first}}}'>" +
        "<div class='og-ad-headline'>"+
        "<a ng-href='{{ad.link}}' target='_blank'>{{ad.headline}}</a></div>" +
        "<div class='og-ad-website'>{{webLink(ad.link)}}</div>" +
        "</div>" + 
        "<div class='og-ad-caption'>"+
        "<div class='og-ad-img'> "+
        "<a ng-href='{{ad.link}}' target='_blank'><img ng-src='{{ad.imageUrl}}'></a>"+
        "</div>"+
        "<div class='og-ad-text'>" +
        "<a ng-href='{{ad.link}}' target='_blank'>{{ad.text}}</a>"+
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>";
    return{
        restrict: 'A',
        template: adTemplate,
        replace: true,
        scope:{ogAdsUrl:'@ogAdsUrl'},
        controller: ['$scope','adverts', function($scope,adverts){
            $scope.ads =[];
            $scope.webLink = function(url){
                var a, domain;
                a = document.createElement("a");
                a.href = url;
                domain = a.hostname;
                domain = domain.replace(/^www\./, "");
                return domain;
                };

                if($scope.ogAdsUrl){
                  return adverts.getCustomAds($scope.ogAdsUrl).success(function(data){
                    return $scope.ads = data;
                    });
                } else {
                    return adverts.getAds().success(function(data){
                      return $scope.ads = data;
                      });        
                }   
            }]
        };
    })
    .factory('adverts', ['$http', function($http){
        getCustomAds = function(newUrl){
            return $http.get(newUrl);
        };
        getAds = function (){
            return $http.get('ads/ads.json');
        };
        return{
            getCustomAds:getCustomAds,
            getAds: getAds
        };
      }]);
