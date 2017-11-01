import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if(!value) 
      return null;

    let words: string[] = value.split(' ');
    let result: string[] = [];
    for(let i = 0; i < words.length; i++){
      let word = words[i];
      if (word){
        result.push(this.capFirst(word));
      }
    }
    return result.join(' ');
  }
  private capFirst(word:string){
    let result = word[0].toLocaleUpperCase() + word.slice(1,).toLocaleLowerCase();
    return result;
  }
}
