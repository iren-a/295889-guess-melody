import getElementByTemplate from "./utils/get-element-by-template";

export default class AbstractView {
  get template() {
    throw new Error(`Abstract method called`);
  }

  render() {
    return getElementByTemplate(this.template);
  }

  bind() {}

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }
    return this._element;
  }
}
