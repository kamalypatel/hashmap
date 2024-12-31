# hashmap

This is a hashmap that utilizes an array's indexes as buckets for the hashcodes to be stored.

Then to handle collisions and extra values in the same bucket, I am using a linkedlist to do this.

Once area of improvement is utilizing the load factor and capacity as intended to increase the size of the array as needed when the load factor is maxed out. I am also not handling the cases where someone trys to modify a value outside of the ranage of 16 initial array indexes.