/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package service;


import beans.Salle;
import connexion.Connexion;
import dao.IDao;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Lenovo X1
 */
public class SalleService implements IDao<Salle> {

    @Override
    public boolean create(Salle o) {
        String sql = "insert into salle values (null, ?, ?)";
        try {
            PreparedStatement ps = Connexion.getInstane().getConnection().prepareStatement(sql);
            ps.setString(2, o.getCode());
            ps.setString(1, o.getType());
            if (ps.executeUpdate() == 1) {
                return true;
            }
        } catch (SQLException e) {
            System.out.println("create : erreur sql : " + e.getMessage());

        }
        return false;
    }

    @Override
    public boolean delete(Salle o) {
        String sql = "delete from salle where id  = ?";
        try {
            PreparedStatement ps = Connexion.getInstane().getConnection().prepareStatement(sql);
            ps.setInt(1, o.getId());
            if (ps.executeUpdate() == 1) {
                sql="delete from machine where salle=?";
                ps = Connexion.getInstane().getConnection().prepareStatement(sql);
                    ps.setInt(1, o.getId());
                    ps.executeUpdate();
                return true;
            }
        } catch (SQLException e) {
            System.out.println("delete : erreur sql : " + e.getMessage());

        }
        return false;
    }

    @Override
    public boolean update(Salle o) {

        String sql = "update salle set code  = ? ,type = ?  where id  = ?";
        try {
            PreparedStatement ps = Connexion.getInstane().getConnection().prepareStatement(sql);
             ps.setString(1, o.getCode());
            ps.setString(2, o.getType());
            ps.setInt(3, o.getId());
            if (ps.executeUpdate() == 1) {
                return true;
            }
        } catch (SQLException e) {
            System.out.println("update : erreur sql : " + e.getMessage());

        }
        return false;
    }

    @Override
    public Salle findById(int id) {
        Salle m = null;
        String sql = "select * from salle where id  = ?";
        try {
            PreparedStatement ps = Connexion.getInstane().getConnection().prepareStatement(sql);
            ps.setInt(1, id);
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                return new Salle(rs.getInt("id"), rs.getString("code"),rs.getString("type"));
            }

        } catch (SQLException e) {
            System.out.println("findById " + e.getMessage());
        }
        return null;
    }

    @Override
    public List<Salle> findAll() {
        List<Salle> salles = new ArrayList<Salle>();

        String sql = "select * from salle";
        try {
        	System.out.println("s");
            PreparedStatement ps = Connexion.getInstane().getConnection().prepareStatement(sql);
            System.out.println("s2");
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                salles.add(new Salle(rs.getInt("id"), rs.getString("code"),rs.getString("type")));
            }

        } catch (SQLException e) {
            System.out.println("findAll " + e.getMessage());
        }
        return salles;
    }
    
    public List<Salle> findSalleByCode(String code) {
        List<Salle> salles = new ArrayList<Salle>();

        String sql = "select * from salle where code =  ?";
        try {
            PreparedStatement ps = Connexion.getInstane().getConnection().prepareStatement(sql);
            ps.setString(1, code);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                salles.add(new Salle(rs.getInt("id"), rs.getString("code"),rs.getString("type")));
            }

        } catch (SQLException e) {
            System.out.println("findAll " + e.getMessage());
        }
        return salles;
    }
    
    public List<String> findCode() {
        List<String> references = new ArrayList<String>();
        String sql = "select distinct(code) as ref from salle";
        try {
            PreparedStatement ps = Connexion.getInstane().getConnection().prepareStatement(sql);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                references.add(rs.getString("ref"));
            }
        } catch (SQLException e) {
            System.out.println("findCode " + e.getMessage());
        }
        return references;
    }
}
