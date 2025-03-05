import java.util.*;

public class Employee {
    int id;
    String name;
    double salary;

    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    public void displayDetails() {
        System.out.println("Employee ID: " + id);
        System.out.println("Employee Name: " + name);
        System.out.println("Employee Salary: " + salary);
    }

    public static void main(String[] args) {
       
        List<Employee> employees = new ArrayList<>();
        employees.add(new Employee(101, "Sid", 50000.0));
        employees.add(new Employee(102, "Rahul", 60000.0));
        employees.add(new Employee(103, "Ajay", 55000.0));

        for (Employee emp : employees) {
            emp.displayDetails();
        }
    }
}

