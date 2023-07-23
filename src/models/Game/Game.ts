class Game {
  public id: number
  public category: string
  public description: string
  public image: string
  public infos: string[]
  public system: string
  public title: string

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    infos: string[],
    system: string,
    title: string
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.infos = infos
    this.system = system
    this.title = title
  }
}

export default Game
