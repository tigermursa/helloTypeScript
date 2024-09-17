1. tsc --init
2. tsc -- watch

## Basic Types (Primitives and Reference)

1. Primitive Types:
   number: Represents numeric values, including integers and floats. 1 2 3 , 22.20
   string: Represents textual data. abc Abc
   boolean: Represents true or false values. 

2. Array: A collection of values of the same type, like a list.

3. Tuple: An array with a fixed number of elements where each element can be of a different type.

4. Enum: A way to define a set of named constants, making it easier to manage a collection of related values.

5. Special Types:
   any: Can hold any type of value; disables type checking.
   unknown: Like any, but safer since type checking is required before use.
   void: Used when a function doesn't return a value.
   null: Represents the absence of a value.
   undefined: Indicates that a variable has been declared but not yet assigned a value.
   never: Represents a type that never occurs (e.g., a function that never returns).
