const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');


const MAVSDK_ACTION_PROTO_PATH = __dirname + '/../MAVSDK-Proto/protos/action/action.proto';
console.log(MAVSDK_ACTION_PROTO_PATH);
const ACTION_PACKAGE_DEFINITION = protoLoader.loadSync(
    MAVSDK_ACTION_PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });

const GRPC_HOST_NAME="127.0.0.1:50000";

class MAVSDKDrone {

    constructor(){
        this.Action = grpc.loadPackageDefinition(ACTION_PACKAGE_DEFINITION).mavsdk.rpc.action;
        this.ActionClient = new this.Action.ActionService(GRPC_HOST_NAME, grpc.credentials.createInsecure());
    }


    Arm()
    {
        this.ActionClient.arm({}, function(err, actionResponse){
            if(err){
                console.log("Unable to arm drone: ", err);
                return;
            }
        });
    }

    Disarm()
    {
        this.ActionClient.disarm({}, function(err, actionResponse){
            if(err){
                console.log("Unable to disarm drone: ", err);
                return;
            }
        });
    }

    Takeoff()
    {
        this.ActionClient.takeoff({}, function(err, actionResponse){
            if(err){
                console.log("Unable to disarm drone: ", err);
                return;
            }
        });
    }

    Land()
    {
        this.ActionClient.land({}, function(err, actionResponse){
            if(err){
                console.log("Unable to land drone: ", err);
                return;
            }
        });
    }
}

module.exports = MAVSDKDrone;