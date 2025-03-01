export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","shared.css"]),
	mimeTypes: {".png":"image/png",".css":"text/css"},
	_: {
		client: {start:"_app/immutable/entry/start.BS24NTu5.js",app:"_app/immutable/entry/app.BHRAJZlz.js",imports:["_app/immutable/entry/start.BS24NTu5.js","_app/immutable/chunks/CKByv8Jg.js","_app/immutable/chunks/B8wOluw4.js","_app/immutable/chunks/B-L73mro.js","_app/immutable/entry/app.BHRAJZlz.js","_app/immutable/chunks/B8wOluw4.js","_app/immutable/chunks/D5-2yjff.js","_app/immutable/chunks/1576qPhf.js","_app/immutable/chunks/1z_8ZOLZ.js","_app/immutable/chunks/B-L73mro.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/advanched",
				pattern: /^\/advanched\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/emoji",
				pattern: /^\/emoji\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
