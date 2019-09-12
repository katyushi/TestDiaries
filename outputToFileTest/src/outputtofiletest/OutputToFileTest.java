package outputtofiletest;

import java.io.*;

/**
 *
 * @author hugo lazzari
 */
public class OutputToFileTest {

    /**
     * @param args the command line arguments
     * @throws java.io.IOException
     */
    public static void main(String[] args) throws IOException, IOException{
        int a = 0;
        String b;
        while (a <= 65/*.537*/){
            b = ";-;";
            //System.out.print(b);
            PrintWriter out = new PrintWriter(new FileWriter("OutFile.txt"));
            out.print(b);
        }
    }//fechamain
}//fechaclass
