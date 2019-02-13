import { observable, action } from 'mobx';

export interface ModalInterface {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export default class ModalStore {
  @observable isOpen = false

  @action closeModal = () => {
    this.isOpen = false;
  }

  @action openModal = () => {
    this.isOpen = true;
  }
}
