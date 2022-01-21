package beans;

import java.util.Date;

public class Machine {

    private int id;
    private String reference;
    private Date dateAchat;
    private String marque;
    private int salle;
    public Machine(int id, String reference, Date dateAchat, String marque,int salle) {
        super();
        this.id = id;
        this.reference = reference;
        this.dateAchat = dateAchat;
        this.marque = marque;
        this.salle=salle;
    }

    public Machine(String reference, Date dateAchat, String marque,int salle) {
        super();
        this.reference = reference;
        this.dateAchat = dateAchat;
        this.marque = marque;
        this.salle=salle;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getReference() {
        return reference;
    }

    public void setReference(String reference) {
        this.reference = reference;
    }

    public Date getDateAchat() {
        return dateAchat;
    }

    public void setDateAchat(Date dateAchat) {
        this.dateAchat = dateAchat;
    }

    public String getmarque() {
        return marque;
    }

    public void setmarque(String marque) {
        this.marque = marque;
    }

   

    public int getSalle() {
        return salle;
    }

    public void setSalle(int salle) {
        this.salle = salle;
    }
    
    @Override
    public String toString() {
        return this.id + " " + this.reference;
    }

}
