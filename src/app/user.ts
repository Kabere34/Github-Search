export class User {
  gitSearch:boolean;
  constructor(
  public username:string,
  public followers:number,
 public following:number

  ){
    this.gitSearch=false;
  }
}
