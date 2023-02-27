export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["dht favicon.png","favicon.png","images/Coiconresize.webp","images/coil drum 2.jpg","images/dht32b.svg","images/dht32w.svg"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp",".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.dc85b4b8.js","imports":["_app/immutable/entry/start.dc85b4b8.js","_app/immutable/chunks/index.64c46151.js","_app/immutable/chunks/singletons.34fa10cf.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.c47b9244.js","imports":["_app/immutable/entry/app.c47b9244.js","_app/immutable/chunks/index.64c46151.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/tech",
				pattern: /^\/tech\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
