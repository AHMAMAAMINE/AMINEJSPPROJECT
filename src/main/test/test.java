/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package test;

import controller.MachineControlle;

import java.beans.Machine;

import javax.servlet.http.HttpServletRequest;
import service.MachineService;

/**
 *
 * @author Lenovo X1
 */
public class test {
    public static void main(String[]args){
             MachineService ms=new MachineService();
             System.out.println("ss");
             for(Machine machine:ms.findByCritere("", "", "3")){
                 System.out.println("s");
             }
    }
}
