

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/advanched/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.Bvf5Tq5v.js","_app/immutable/chunks/1576qPhf.js","_app/immutable/chunks/B8wOluw4.js","_app/immutable/chunks/B2OrKuJO.js"];
export const stylesheets = [];
export const fonts = [];
