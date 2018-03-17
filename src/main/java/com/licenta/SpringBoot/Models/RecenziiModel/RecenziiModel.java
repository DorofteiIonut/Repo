package com.licenta.SpringBoot.Models.RecenziiModel;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.licenta.SpringBoot.Models.MediciModel.MediciModel;

@Entity
@Table(name="RECENZIE")
public class RecenziiModel {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="ID_RECENZIE")
	private long id_recenzie;
	
	@Column(nullable=false, name="NOTASERVMED")
	private int notaServmed;
	
	@Column(nullable=false, name="NOTAAPARATURA")
	private int notaAparatura;
	
	@Column(nullable=false, name="NOTAPRET")
	private int notaPret;
	
	@Column(nullable=false, name="NOTAASPECTCAB")
	private int notaAspectcab;
	
	@Column(nullable=false, name="NOTALOCATIE")
	private int notaLocatie;
	
	@Column( name="DESCRIERE")
	private String descriere;
	
	@Column(name="Data")
	private Timestamp data;
	
	@ManyToOne
	@JoinColumn(name="IDMED")
	private MediciModel recenzie;

	public long getId_recenzie() {
		return id_recenzie;
	}

	public void setId_recenzie(long id_recenzie) {
		this.id_recenzie = id_recenzie;
	}

	public int getNotaServmed() {
		return notaServmed;
	}

	public void setNotaServmed(int notaServmed) {
		this.notaServmed = notaServmed;
	}

	public int getNotaAparatura() {
		return notaAparatura;
	}

	public void setNotaAparatura(int notaAparatura) {
		this.notaAparatura = notaAparatura;
	}

	public int getNotaPret() {
		return notaPret;
	}

	public void setNotaPret(int notaPret) {
		this.notaPret = notaPret;
	}

	public int getNotaAspectcab() {
		return notaAspectcab;
	}

	public void setNotaAspectcab(int notaAspectcab) {
		this.notaAspectcab = notaAspectcab;
	}

	public int getNotaLocatie() {
		return notaLocatie;
	}

	public void setNotaLocatie(int notaLocatie) {
		this.notaLocatie = notaLocatie;
	}

	public String getDescriere() {
		return descriere;
	}

	public void setDescriere(String descriere) {
		this.descriere = descriere;
	}

	public Timestamp getData() {
		return data;
	}

	public void setData(Timestamp data) {
		this.data = data;
	}

	public MediciModel getRecenzie() {
		return recenzie;
	}

	public void setRecenzie(MediciModel recenzie) {
		this.recenzie = recenzie;
	}

	@Override
	public String toString() {
		return "RecenziiModel [id_recenzie=" + id_recenzie + ", notaServmed=" + notaServmed + ", notaAparatura="
				+ notaAparatura + ", notaPret=" + notaPret + ", notaAspectcab=" + notaAspectcab + ", notaLocatie="
				+ notaLocatie + ", descriere=" + descriere + ", data=" + data + ", recenzie=" + recenzie + "]";
	}

	
}
