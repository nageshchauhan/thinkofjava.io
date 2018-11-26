[Back to Threading](../README.md)

# Thread pool (Executor framework)

Creating a new thread for every job may create performance and memory problem. To overcome this we should go for thread pool. Thread pool is a pool of already created thread ready to do our job. Java 1.5 introduces thread pool framework to implement thread pools. Thread pool framework also known as Executor framework.

### How to create thread pool

`ExecutorService service = Executors.newFixedThreadPool(3);`

We can submit runnable job by using submit method `service.submit(job);`

We can shutdown executor service by using `service.shutdown()` method

### Example

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

class PrintJob implements Runnable{
    String name;
    public PrintJob(String name){
        this.name = name;
    }
    
    @Override
    public void run() {
        System.out.println(name+" job started by thread : "+Thread.currentThread().getName());
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(name+" job completed by thread : "+Thread.currentThread().getName());
    }
}

public class ExecutorServiceExample{

    public static void main(String[] args) {
        PrintJob jobs[] = {new PrintJob("FirstJob"),
                new PrintJob("SecondJob"),
                new PrintJob("ThirdJob"),
                new PrintJob("FourthJob"),
                new PrintJob("FifthJob"),
                new PrintJob("SixthJob")}; 
        ExecutorService service = Executors.newFixedThreadPool(3);
        for(PrintJob job : jobs){
            service.submit(job);
        }
        service.shutdown();
    }
}
```

Possible output:

```
SecondJob job started by thread : pool-1-thread-2
FirstJob job started by thread : pool-1-thread-1
ThirdJob job started by thread : pool-1-thread-3
ThirdJob job completed by thread : pool-1-thread-3
SecondJob job completed by thread : pool-1-thread-2
FirstJob job completed by thread : pool-1-thread-1
FifthJob job started by thread : pool-1-thread-1
SixthJob job started by thread : pool-1-thread-2
FourthJob job started by thread : pool-1-thread-3
FifthJob job completed by thread : pool-1-thread-1
SixthJob job completed by thread : pool-1-thread-2
FourthJob job completed by thread : pool-1-thread-3
```

**Note:** While designing web servers or application servers we can use thread pool concept.

## Callable interface and Future

In the case of runnable job, thread won't return anything after completing job. If a thread is required to return result after execution then we should go for callable.

Callable interface contains only one method, `public Object call() throws Exception;'

If we submit callable object to executor service then after completing the job, thread returns an object of type Future class. ie future object can be used to retrieve the result from callable job.

### Example

```java
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

class MyCallable implements Callable<Object>{
    int num;
        public MyCallable(int num){
        this.num = num;
    }
    
    @Override
    public Object call() throws Exception{
        System.out.println(Thread.currentThread().getName()+" is resposible to calculate sum of first "+num+" numbers");
        int sum = 0;
        for(int i=1;i<=num;i++){
            sum+=i;
        }
        return sum;
    }
}

public class CallableExample{

    public static void main(String[] args) throws InterruptedException, ExecutionException {
        MyCallable []jobs = {new MyCallable(10),
                new MyCallable(20),
                new MyCallable(30),
                new MyCallable(40),
                new MyCallable(50),
                new MyCallable(60),
                new MyCallable(70)};

        ExecutorService service = Executors.newFixedThreadPool(3);
        for(MyCallable c : jobs){
            Future<Object> future = service.submit(c);
            System.out.println(future.get());
        }
        service.shutdown();
    }
}
```

Possible output:

```
pool-1-thread-1 is resposible to calculate some of first 10 numbers
55
pool-1-thread-2 is resposible to calculate some of first 20 numbers
210
pool-1-thread-3 is resposible to calculate some of first 30 numbers
465
pool-1-thread-1 is resposible to calculate some of first 40 numbers
820
pool-1-thread-2 is resposible to calculate some of first 50 numbers
1275
pool-1-thread-3 is resposible to calculate some of first 60 numbers
1830
pool-1-thread-1 is resposible to calculate some of first 70 numbers
2485
```

