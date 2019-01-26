[Back to Collection](../README.md)

# Comparable and Comparator interface

## Comparable (I)
--> It is present in `java.lang` package and it contains only one method `compareTo`.

`public int compareTo(Object obj)`

Eg. `obj1.compareTo(obj2);`

This will return any one of the following values <br>
1. **negative number** which indicate that **obj1 has to come before obj2** <br>
2. **positive number** which indicate that **obj1 has to come after obj2** <br>
3. **zero** which indicate that **obj1 and obj2 are equal** 

Example:

```java
System.out.println("A".compareTo("Z"));
System.out.println("Z".compareTo("A"));
System.out.println("A".compareTo("A"));
```

Output:

```java
-25
25
0
```

If default natural sorting order not available or if we are not satisfied with default natural sorting order then we can define our own customized sorting by using `Comparator`

* Comparable meant for default natural sorting order
* Comparator meant for customized sorting order

## Comparator (I)

`Comparator` interface present in `java.util` package and defines two methods

1. `public int compare(Object obj1, Object obj2)`
2. `public boolean equals(Object obj)`

Whenever we are implementing `Comparator` interface compulsory we should provide implementation for `compare()`. `equal()` method implementation is optional because it is already available for our class from `Object` class through inheritance.

--> Program to insert integer object into TreeSet where sorting order is descending.

```java
import java.util.Comparator;
import java.util.TreeSet;

public class DecendingIntegerEx {

	public static void main(String[] args) {
		
		TreeSet<Integer> t = new TreeSet<Integer>(new MyComparator());
		t.add(10);
		t.add(0);
		t.add(15);
		t.add(3);
		t.add(20);
		t.add(20);
		System.out.println(t);
	}
}
class MyComparator implements Comparator<Integer>{

	@Override
	public int compare(Integer o1, Integer o2) {
		if(o1<o2){
			return 1;
		}else if(o1>o2){
			return -1;
		}
		return 0;
	}
}
```

Output:

```java
[20, 15, 10, 3, 0]
```

If we are not passing comparator object in `TreeSet` object declaration in above program, the JVM will internally calls `compareTo()` which is meant for default natural sorting order. In this case output will be `[0, 3, 10, 15, 20]`

If we are passing comparator object while `TreeSet` object declaration, then our own `compare()` method will be executed which is meant for customized sorting.

#### Various alternatives of implementing compare()

```java
class MyComparator implements Comparator<Integer>{

	@Override
	public int compare(Integer o1, Integer o2) {
	
		//return o1.compareTo(o2); // ascending order [0, 3, 10, 15, 20]
		
		//return -o1.compareTo(o2); // descending order [20, 15, 10, 3, 0]
		
		//return o2.compareTo(o1); // descending order [20, 15, 10, 3, 0]
		
		//return -o2.compareTo(o1); // ascending order [0, 3, 10, 15, 20]
		
		//return 1; // insertion order [10, 0, 15, 3, 20, 20]
		
		//return -1; // reverse of insertion order [20, 20, 3, 15, 0, 10]
		
		//return 0; // returns first inserted element [10]
		
	}
}
```

--> Program to insert String objects into TreeSet where all elements should be inserted according to reverse of alphabetical order.

```java
import java.util.Comparator;
import java.util.TreeSet;

public class DescendingStringEx {

	public static void main(String[] args) {
		
		TreeSet<String> t = new TreeSet<String>(new MyComparator());
		t.add("A");
		t.add("z");
		t.add("k");
		t.add("8");
		t.add("a");
		t.add("R");
		System.out.println(t);
	}
}
class MyComparator implements Comparator<String>{

	@Override
	public int compare(String o1, String o2) {
		
		return o2.compareTo(o1);
		//return -o1.compareTo(o2); // both statements are same
	}
}
```

Output

```java
[z, k, a, R, A, 8]
```

--> Program to insert StringBuffer objects into TreeSet where sorting order is alphabetical order.

```java
import java.util.Comparator;
import java.util.TreeSet;

public class AscendingStringBuffEx {

	public static void main(String[] args) {
		
		TreeSet t = new TreeSet(new MyComparator());
		t.add("A");
		t.add("z");
		t.add("k");
		t.add("8");
		t.add("a");
		t.add("R");
		System.out.println(t);
	}
}
class MyComparator implements Comparator{

	@Override
	public int compare(Object o1, Object o2) {
		String s1 = o1.toString();
		String s2 = o2.toString();
		return s1.compareTo(s2);
	}
}
```

Output:

```java
[8, A, R, a, k, z]
```

**Note:** <br>
1. If we are depending on default natural sorting order, compulsory objects should be homogeneous and comparable otherwise we will get `ClassCaseException`. <br>
2. If we are depending on our own sorting by comparator, then elements need not be homogeneous and comparable.

--> Program to insert String and StringBuffer objects into TreeSet where the sorting order is increasing length order. If two string having the same length then consider their alphabetical order.

```java
import java.util.Comparator;
import java.util.TreeSet;

public class AscendingStringLengthEx {

	public static void main(String[] args) {
		
		TreeSet t = new TreeSet(new MyComparator());
		t.add("A");
		t.add(new StringBuffer("ABC"));
		t.add("AA");
		t.add(new StringBuffer("XX"));
		t.add("ABCD");
		t.add("R");
		System.out.println(t);
	}
}
class MyComparator implements Comparator{

	@Override
	public int compare(Object o1, Object o2) {
		String s1 = o1.toString();
		String s2 = o2.toString();
		
		int l1 = s1.length();
		int l2 = s2.length();
		
		if(l1<l2){
			return -1;
		}else if(l1>l2){
			return 1;
		}
		return s1.compareTo(s2);
	}
}
```

Output:

```java
[A, R, AA, XX, ABC, ABCD]
```

### Comparable vs Comparator

--> For pre-defined comparable classed, default natural sorting already there. If we are not satisfied with default natural sorting order then we can define our own sorting by using Comparator. 

--> For pre-defined non-comparable classes (like StringBuffer), default natural sorting not available. We can define our own sorting by using Comparator.

--> For our own customized classes (like Employee), the person who is writing the class is responsible to define default natural sorting order by implementing Comparable interface. The person who is using our class, if he is not satisfied with default natural sorting order then he can define his own sorting by using Comparator.<br>


--> Program to insert Employee (id, name) object into TreeSet and Employee class should implement Comparable which will sort employee object according to id in ascending order. Also write comparator which will sort this employee objects by their name.


```java
import java.util.Comparator;
import java.util.TreeSet;

class Employee implements Comparable<Employee>{
	private int id;
	private String name;
	
	public Employee(int id, String name){
		this.id=id;
		this.name=name;
	}
	
	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	@Override
	public String toString() {
		return this.id+"-"+this.name;
	}
	
	@Override
	public int compareTo(Employee o) {
		if(this.id<o.id){
			return -1;
		}else if(this.id>o.id){
			return 1;
		}
		return 0;
	}
}
public class ListExample {

	public static void main(String[] args) {
		
		Employee e1 = new Employee(10,"A");
		Employee e2 = new Employee(60,"C");
		Employee e3 = new Employee(20,"E");
		Employee e4 = new Employee(50,"S");
		Employee e5 = new Employee(80,"G");
		Employee e6 = new Employee(20,"E");
		
		TreeSet set = new TreeSet();
		set.add(e1);
		set.add(e2);
		set.add(e3);
		set.add(e4);
		set.add(e5);
		set.add(e6);
		System.out.println(set);
		
		TreeSet customSortedList = new TreeSet(new MyComparator());
		customSortedList.add(e1);
		customSortedList.add(e2);
		customSortedList.add(e3);
		customSortedList.add(e4);
		customSortedList.add(e5);
		customSortedList.add(e6);
		System.out.println(customSortedList);
	}
}
class MyComparator implements Comparator<Employee>{

	@Override
	public int compare(Employee o1, Employee o2) {
		return o1.getName().compareTo(o2.getName());
	}
}
```

Output:

```java
[10-A, 20-E, 50-S, 60-C, 80-G]
[10-A, 60-C, 20-E, 80-G, 50-S]
```

### Comparison of Comparable and Comparator

#### Comparable
1. We can use comparable to define default natural sorting order.
2. This interface present in `java.lang` package.
3. Defines only one method ie `compareTo()`
4. Al wrapper classed and String class implements Comparable.

#### Comparator
1. We can use comparator to define customized sorting order.
2. This interface present in `java.util` package.
3. Defines two methods `compare()` and `equals()`.
4. No pre-defined class implements Comparator (Except `Collator` and `RuleBasedCollator` classes).


<br>

<div style="float:left">
  <a href="../3_collection_framework/cursor.md" style=""><-- Cursors</a>
</div>


<div style="float:right">
  <a href="../3_collection_framework/map.md" style="">Next: Map--></a>
</div>


<br>