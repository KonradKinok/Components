declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.tsx' {
    const content: any;
    export default content;
}

declare module '*.jsx' {
    const content: any;
    export default content;
}

declare module "*.mp3" {
  const src: string;
  export default src;
}