import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class RentalImageComponent extends Component {
  @tracked showModal = false;

  @action
  toggleModal() {
    this.showModal = !this.showModal;
  }
}
