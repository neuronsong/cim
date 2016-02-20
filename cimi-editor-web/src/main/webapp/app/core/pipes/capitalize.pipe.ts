import {Pipe, PipeTransform} from "angular2/core";
/*
 * Capitalize the first character of a string
 * Takes alphabetical string
 * Usage:
 *   value | capitalize
 * Example:
 *   {{ apple | capitalize }}
 *   formats to: Apple
*/
@Pipe({name: "capitalize"})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
