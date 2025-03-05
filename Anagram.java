import java.util.*;

public class Anagram {
    public static void main(String args[]) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter the first string: ");
        String s1 = scanner.nextLine();
        System.out.println("Enter the second string: ");
        String s2 = scanner.nextLine();
        if (s1.length() != s2.length()) {
            System.out.println(false);
        } else {
            
            char[] arr1 = s1.toCharArray();
            char[] arr2 = s2.toCharArray();
            Arrays.sort(arr1);
            Arrays.sort(arr2);

            if (Arrays.equals(arr1, arr2)) {
                System.out.println(true);
            } else {
                System.out.println(false);
            }
        }
        scanner.close();
    }
}
