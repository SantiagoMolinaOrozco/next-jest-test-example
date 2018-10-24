"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const typescript_rest_1 = require("typescript-rest");
require("./controller/postsController");
let app = express();
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
    if ('OPTIONS' == request.method) {
        response.send(200);
    }
    else {
        next();
    }
});
typescript_rest_1.Server.buildServices(app);
app.use((err, req, res, next) => {
    if (err instanceof typescript_rest_1.HttpError) {
        res.set('Content-Type', 'application/json');
        res.status(err.statusCode);
        res.json({ data: { info: err.message, status: err.statusCode } });
    }
    else {
        next(err);
    }
});
app.use(express.static('./public'));
typescript_rest_1.Server.swagger(app, './test/data/swagger.yaml', '/api-docs', 'localhost:3000', [
    'http',
]);
app.listen(3000, function () {
    console.log('Rest Server listening on port 3000!');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBbUM7QUFDbkMscURBQW9EO0FBQ3BELHdDQUFzQztBQUV0QyxJQUFJLEdBQUcsR0FBd0IsT0FBTyxFQUFFLENBQUM7QUFDekMsR0FBRyxDQUFDLEdBQUcsQ0FDTCxDQUNFLE9BQXdCLEVBQ3hCLFFBQTBCLEVBQzFCLElBQTBCLEVBQzFCLEVBQUU7SUFDRixRQUFRLENBQUMsTUFBTSxDQUFDLDZCQUE2QixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3BELFFBQVEsQ0FBQyxNQUFNLENBQ2IsOEJBQThCLEVBQzlCLGdEQUFnRCxDQUNqRCxDQUFDO0lBQ0YsUUFBUSxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNoRSxJQUFJLFNBQVMsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO1FBQy9CLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDcEI7U0FDSTtRQUNILElBQUksRUFBRSxDQUFDO0tBQ1I7QUFDSCxDQUFDLENBQ0YsQ0FBQztBQUNGLHdCQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzFCLEdBQUcsQ0FBQyxHQUFHLENBQ0wsQ0FDRSxHQUFRLEVBQ1IsR0FBb0IsRUFDcEIsR0FBcUIsRUFDckIsSUFBMEIsRUFDMUIsRUFBRTtJQUNGLElBQUksR0FBRyxZQUFZLDJCQUFTLEVBQUU7UUFDNUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUM1QyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzQixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDbkU7U0FBTTtRQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNYO0FBQ0gsQ0FBQyxDQUNGLENBQUM7QUFFRixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUVwQyx3QkFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsMEJBQTBCLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFO0lBQzdFLE1BQU07Q0FDUCxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtJQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQztBQUNyRCxDQUFDLENBQUMsQ0FBQyJ9