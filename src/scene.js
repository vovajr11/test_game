export class Scene {
  constructor(game) {
    this.game = game;
  }

  init() {
    //init() для запуску та перезапуску сцени і скинути все по дефолту
    this.isActive = true;
  }
  //render(time) для отрисовки сцени
  render(time) {}
}
