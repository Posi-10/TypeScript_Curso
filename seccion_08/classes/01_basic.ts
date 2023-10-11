(() => {

  class Avanger {

    // private name: string;
    // private team: string;
    // public realName?: string;
    static avgAge: number = 35;
    static getAvgAge() {
      return this.name;
    }

    constructor(
      private name: string,
      private team: string,
      public realName?: string,
    ) {}

    private bio(): string {
      return `${this.name} (${this.team})`;
    }
  }

  // const antman: Avanger = new Avanger('Antman', 'Capitan', 'Scott Lang');
  // console.log(antman);
  // console.log(Avanger.getAvgAge());
  // console.log(Avanger.avgAge);

})();