package com.licenta.SpringBoot.Models.MediciModel;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.licenta.SpringBoot.Models.CabinetModel.CabinetModel;
import com.licenta.SpringBoot.Models.ProgramModel.ProgramModel;
import com.licenta.SpringBoot.Models.ProgramariModel.ProgramariModel;
import com.licenta.SpringBoot.Models.RecenziiModel.RecenziiModel;


@Entity
@Table(name="MEDICI")
public class MediciModel {
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="IDMED")
	private long idMed;
	
	@Column(nullable=false, name="NUME")
	private String nume;
	
	@Column(nullable=false, name="PRENUME")
	private String prenume;
	
	@ElementCollection
	@Column(nullable=false, name="NUMERETEL")
	private List<String> numereTel=new ArrayList<>();
	
	@Column(nullable=false, unique=true, name="EMAIL")
	private String email;
	
	@Column(unique=true, name="FACEBOOK")
	private String facebook;
	
	@Column(nullable=false, name="SPECIALIZARE")
	private String specializare;
	
	@ManyToMany(mappedBy="listaMedici")
	private List<CabinetModel> listaCabinete=new ArrayList<CabinetModel>();
	
	@OneToMany(mappedBy="medic", cascade=CascadeType.ALL)
	private List<ProgramModel> orar=new ArrayList<ProgramModel>();
	
	@OneToMany(mappedBy="programare", cascade=CascadeType.ALL)
	private List<ProgramariModel> programari=new ArrayList<ProgramariModel>();
	
	@OneToMany(mappedBy="recenzie", cascade=CascadeType.ALL)
	private List<RecenziiModel> rec=new ArrayList<RecenziiModel>();

	/**
	 * @return the idMed
	 */
	public long getIdMed() {
		return idMed;
	}

	/**
	 * @param idMed the idMed to set
	 */
	public void setIdMed(long idMed) {
		this.idMed = idMed;
	}

	/**
	 * @return the nume
	 */
	public String getNume() {
		return nume;
	}

	/**
	 * @param nume the nume to set
	 */
	public void setNume(String nume) {
		this.nume = nume;
	}

	/**
	 * @return the prenume
	 */
	public String getPrenume() {
		return prenume;
	}

	/**
	 * @param prenume the prenume to set
	 */
	public void setPrenume(String prenume) {
		this.prenume = prenume;
	}

	/**
	 * @return the numereTel
	 */
	public List<String> getNumereTel() {
		return numereTel;
	}

	/**
	 * @param numereTel the numereTel to set
	 */
	public void setNumereTel(List<String> numereTel) {
		this.numereTel = numereTel;
	}

	/**
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * @param email the email to set
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * @return the facebook
	 */
	public String getFacebook() {
		return facebook;
	}

	/**
	 * @param facebook the facebook to set
	 */
	public void setFacebook(String facebook) {
		this.facebook = facebook;
	}

	/**
	 * @return the specializare
	 */
	public String getSpecializare() {
		return specializare;
	}

	/**
	 * @param specializare the specializare to set
	 */
	public void setSpecializare(String specializare) {
		this.specializare = specializare;
	}

	/**
	 * @return the listaCabinete
	 */
	public List<CabinetModel> getListaCabinete() {
		return listaCabinete;
	}

	/**
	 * @param listaCabinete the listaCabinete to set
	 */
	public void setListaCabinete(List<CabinetModel> listaCabinete) {
		this.listaCabinete = listaCabinete;
	}

	/**
	 * @return the orar
	 */
	public List<ProgramModel> getOrar() {
		return orar;
	}

	/**
	 * @param orar the orar to set
	 */
	public void setOrar(List<ProgramModel> orar) {
		this.orar = orar;
	}

	/**
	 * @return the programari
	 */
	public List<ProgramariModel> getProgramari() {
		return programari;
	}

	/**
	 * @param programari the programari to set
	 */
	public void setProgramari(List<ProgramariModel> programari) {
		this.programari = programari;
	}

	/**
	 * @return the rec
	 */
	public List<RecenziiModel> getRec() {
		return rec;
	}

	/**
	 * @param rec the rec to set
	 */
	public void setRec(List<RecenziiModel> rec) {
		this.rec = rec;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "MediciModel [idMed=" + idMed + ", nume=" + nume + ", prenume=" + prenume + ", numereTel=" + numereTel
				+ ", email=" + email + ", facebook=" + facebook + ", specializare=" + specializare + ", listaCabinete="
				+ listaCabinete + ", orar=" + orar + ", programari=" + programari + ", rec=" + rec + "]";
	}

	
	
}
