// global.d.ts

// Dichiara che qualsiasi file che termina con .module.css
// deve essere trattato come un oggetto che mappa stringhe a stringhe.
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}