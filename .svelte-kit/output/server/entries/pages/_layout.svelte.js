import "clsx";
function _layout($$payload, $$props) {
  let { children } = $$props;
  $$payload.out += `<nav data-sveltekit-reload=""><a href="/">home</a> <a href="/about">about</a> <a href="/advanched">advanched</a></nav> `;
  children($$payload);
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
