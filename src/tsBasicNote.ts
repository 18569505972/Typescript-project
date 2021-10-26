/* 基本注解 */
export const num = 1;
export const str = '1';
export const bool = true;
export const arr: (number | string | boolean)[] = [];

/* 接口：合并基本类型 */
interface Person {
  name: string;
  age: number;
}
export const person1: Person = {
  name: 'zhangsan',
  age: 22,
};

/* 内联注解 */
export const person2: { name: string; age: number } = {
  name: 'lisi',
  age: 22,
};

/* 特殊注解 */
let key: any;
key = 1;
key = true;

console.log('key------', key);

// strictNullChecks: false
// let nullCheck: number[];
// let undefinedCheck: string;

// 这些类型能被赋予
// nullCheck = null;
// undefinedCheck = undefined;

function VoidCheck(): void {
  console.log('void-----');
}

export { key, VoidCheck };

/* 泛型 */
// 返回类型依赖于传入类型
export function TCheck<T>(temp: T[]): T[] {
  temp.reverse();
  return temp;
}

/* 联合类型 */
export const conditionCheck: (number | string)[] = [1, '1'];

/* 交叉类型 */
interface Color {
  color: string;
  bgColor: string;
}
interface Size {
  size: number;
  fontSize: number;
}
export function crossCheck<T extends Color, U extends Size>(color: T, size: U): T & U {
  return { ...color, ...size };
}

/* 元组类型 */
export const tuple: [number, string] = [1, '1'];

/* 类型别名 */
export type Text = string | { value: string };
