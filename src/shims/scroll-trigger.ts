export interface ScrollTriggerConfig {
  trigger: HTMLElement | null;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  onUpdate?: (self: { progress: number; direction: number }) => void;
  onEnter?: () => void;
  onLeave?: () => void;
}

export class ScrollTrigger {
  private static instances: Array<() => void> = [];

  static create(config: ScrollTriggerConfig) {
    if (typeof window === "undefined" || !config.trigger) {
      return { kill: () => {} };
    }
    const el = config.trigger;
    let lastProgress = -1;
    let currentSmooth = 0;
    let targetProgress = 0;
    let rafId = 0;
    const lerpFactor = typeof config.scrub === "number" ? Math.min(0.25, 1 / (config.scrub * 10)) : 0.18;

    const computeProgress = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 900;
      const totalScroll = Math.max(1, rect.height - vh);
      const raw = -rect.top / totalScroll;
      targetProgress = Math.max(0, Math.min(1, raw));
    };

    const tick = () => {
      computeProgress();
      const diff = targetProgress - currentSmooth;
      if (Math.abs(diff) > 0.0005) {
        currentSmooth += diff * lerpFactor;
      } else {
        currentSmooth = targetProgress;
      }
      if (Math.abs(currentSmooth - lastProgress) > 0.0005) {
        const direction = currentSmooth >= lastProgress ? 1 : -1;
        lastProgress = currentSmooth;
        config.onUpdate?.({ progress: currentSmooth, direction });
      }
      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);
    const kill = () => {
      window.cancelAnimationFrame(rafId);
    };
    ScrollTrigger.instances.push(kill);
    return { kill };
  }

  static refresh() {}
  static killAll() {
    ScrollTrigger.instances.forEach((k) => k());
    ScrollTrigger.instances = [];
  }
}

export default ScrollTrigger;
