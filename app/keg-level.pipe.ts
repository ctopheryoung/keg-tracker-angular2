import { Pipe, PipeTransform } from 'angular2/core';
import { Keg } from './keg.model';

@Pipe({
  name: "low",
  pure: false
})
export class KegLevelPipe implements PipeTransform {
  transform(input: Keg[], args) {
    var desiredKegLevelState = args[0];
    if(desiredKegLevelState === "low") {
      return input.filter((keg) => {
        return keg.low;
      });
    } else if (desiredKegLevelState === "notLow") {
      return input.filter((keg) => {
        return !keg.low;
      });
    } else {
      return input;
    }
  }
}
