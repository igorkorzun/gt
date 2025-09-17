declare module "accordion-js" {
  export default class Accordion {
    constructor(
      selector: string | Element | NodeListOf<Element>,
      options?: AccordionOptions
    );

    open(index: number): void;

    close(index: number): void;

    destroy(): void;
  }

  export interface AccordionOptions {
    duration?: number;

    ariaEnabled?: boolean;

    showMultiple?: boolean;

    onlyChildNodes?: boolean;

    openOnInit?: number[];

    elementClass?: string;

    triggerClass?: string;

    panelClass?: string;

    activeClass?: string;

    beforeOpen?: (currentElement: HTMLElement) => void;

    onOpen?: (currentElement: HTMLElement) => void;

    beforeClose?: (currentElement: HTMLElement) => void;

    onClose?: (currentElement: HTMLElement) => void;
  }
}
