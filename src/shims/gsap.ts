import { ScrollTrigger } from "./scroll-trigger";

export const gsap = {
  registerPlugin: (..._plugins: unknown[]) => {},
  context: (fn: () => void, _scope?: unknown) => {
    fn();
    return {
      revert: () => {}
    };
  },
  to: (_target: unknown, _vars: Record<string, unknown>) => {},
  fromTo: (_target: unknown, _fromVars: Record<string, unknown>, _toVars: Record<string, unknown>) => {},
  timeline: (_config?: Record<string, unknown>) => {
    const chain = {
      to: () => chain,
      fromTo: () => chain,
      kill: () => {}
    };
    return chain;
  }
};

export { ScrollTrigger };
export default gsap;
