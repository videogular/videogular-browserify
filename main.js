var angular = require('angular');

angular.module('vgBrowserify', [
		require('angular-sanitize'),
		require('videogular'),
		require('videogular-controls')
	])
	.controller("MainCtrl", ["$sce",
		function($sce) {
			this.sources = [
				{
					src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"),
					type: "video/mp4"
				}
			];
		}
	]);
