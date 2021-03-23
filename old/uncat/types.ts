// literal types {{{ 
// can only assume fixed values
type StringLiteral = 'abc' | 'def';
type NumericLiteral = 1 | 2 | 3;
type BooleanLiteral = { isValid: true } | { isValid: false }
type UnionType = { a: number; b: string } | { a:string; c: any };

const val: UnionType = { // must have a: number|string AND (b:string OR c:any)
    a: "wow",       // comes from 2nd type - may be string or number
    b: "wow",       // comes from 1st type - 
    c: 1            // comes from 3rd type
}

type IntersectionType = { a:number|boolean; b:string } & { a:boolean; c:number };

const int: IntersectionType = { // must have a:boolean AND b:string AND c:number
    a: true,        // has to bee boolean because (number|boolean) & (boolean) -> boolean
    b: "wow",       // has to be string because b is string
    c: 1            // has to be number because c is number
}
//}}}
// typeof / lookup   {{{
// returns string literals as keys from keyed type
type K1 = keyof { [x: string]: string };    // "string"
type K2 = keyof { a: number; b: string };   // "a" | "b"

// indexed access :: returns the type of a given key of keyed type
type K3 = { a: number; b: string }["a"];    // number
type K4 = string["charAt"]; // string has method of type (pos: number) => string
type K5 = (string[])["push"] // type of function push of string array 

interface User {
    name: string;
    address: {
        city: string;
    }
}

type Address = User["address"];
type AddressCityType = User["address"]["city"]

//}}}
// Partial<T> {{{
// sets all keys as optional
type Q1 = Partial<{a:string}>; // { a:? string }

type IPartial<T> = {
    [K in keyof T]?: T[K];
}
//}}}
// Readonly<T> {{{
// sets readonly on all keys
type Q2 = Readonly<{a:string}>; // { readonly a: string }

type IReadonly<T> = {
    readonly [K in keyof T]: T[K]
}
//}}}
// Required<T> {{{

type Q11 = Required<{ a?: number; b?: string; }>

type IRequired<T> = {
    [x in keyof T]: T[x]
}

// }}}
// Record<Keys,T>{{{
// maps keys K of a union of literals to a type T

type Q3 = Record<"a"|"b"|"c", string>; // maps a,b,c to string

type MyRecord<K extends string | number | symbol,T> = {
    [x in K]: T
}
//}}}
// Pick<T,Keys>{{{
// pick a set of keys from T

type Q4 = Pick<{a:string, b:number}, "a">;

type IPick<T, Keys extends keyof T> = {
    [x in Keys]: T[x]
}
//}}}
// Exclude<T, Keys>{{{
// Exclude Keys from union T
type Q5 = Exclude<"a"|"b"|"c", "a">;

// T extends V will evaluate for every item in the union
type IExclude<T, V extends T> = T extends V ? never : T;
//}}}
// Omit<T, Keys>{{{
// filter/omits a set of Keys in type T

type Q6 = Omit<{a:string, b:number}, "a">;

type IOmit<T, Keys extends keyof T> = Pick<T, Exclude<keyof T, Keys>>;
//}}}
// Extract<T, U>{{{
// extracts from T's literals types assignable to union U
type Q7 = Extract<"a" | "b" | "c", "a" | "f"> // -> "a"

type IExtract<T, U> = T extends U ? T : never;

//}}}
// NonNullable<T>{{{
// removes null & undefined from union T

type Q8 = NonNullable<"string"|null|never|undefined>;

type INonNullable<T> = T extends null | undefined ? never : T;
//}}}
// Parameters<F> and ReturnType<F>{{{
// constructs tuple with parameters used in function
// constructs type using return type of function

type IParameters<T extends (...args: any) => any> = 
    T extends (...args: infer P) => any ? P : never;

type IReturnType<T extends (...args: any) => any> = 
    T extends (...args: any) => infer P ? P : never;

type Q9 = IParameters<(x:number, y:string)=>string>;
type Q10 = IReturnType<(x:number, y:string)=>string>;
//}}}
// TODO: December 23, 2020 - InstanceType, ConstructorParameters, 
//                           ThisParameter, OmitThisParameter, ThisType
// Filter types (custom){{{

// creates an union of the types of keyed values in type T
type Types<T> = T[keyof T]; // Types<{a:string;b:number} -> "string"|"number"

// this will Filter any value of keyed type T that matches type of V
type Filter<T, V> = Pick<T, Exclude<keyof T, 
    { [K in keyof T]: T[K] extends V ? K : never}[keyof T]>>;

type NonFunctional<T> = Filter<T, Function>;

let a: NonFunctional<{
    name: string;
    fun: () => void;
}> = { name: "wow" }

//}}}
