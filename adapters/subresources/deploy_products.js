var apigeetool 		= require('apigeetool')
var lib				= require('./lib')
var sdk 			= apigeetool.getPromiseSDK()

var sdk 			= apigeetool.getPromiseSDK()

var context = {

}

function build(context) {

}

function deploy(context, resourceName, subResourceName) {
	opts = lib.build_opts(context, resourceName, subResourceName)



	sdk.createProduct(opts).then(
		function(result){
			//developer created
		},
		function(err){
			//developer creation failed
		});
}


function clean(context) {
	opts = lib.build_opts(context, resourceName, subResourceName)

	sdk.deleteProduct(deployment_opts).then(
		function(result){
			//developer deleted
		},
		function(err){
			//developer delete failed
		});
}

exports.clean 			= clean
exports.build 			= build
exports.deploy 			= deploy
