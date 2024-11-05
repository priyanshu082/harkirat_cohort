// export default {
// 	async fetch(request, env, ctx): Promise<Response> {
// 		return  Response.json({
// 			message:"Hi there",
// 		});
// 	},
// } satisfies ExportedHandler<Env>;

export interface Env {

}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext) {
		console.log("Body----->>>>>",request.body);
		console.log("Headers------>>>>>",request.headers);
		console.log("Methods------>>>>>",request.method);
		console.log("URL------>>>>>",request.url);
		
		if (request.method === "GET") {
			return Response.json({
				message: "you sent a get request"
			});
		} else {
			return Response.json({
				message: "you did not send a get request"
			});
		}
	},
};
