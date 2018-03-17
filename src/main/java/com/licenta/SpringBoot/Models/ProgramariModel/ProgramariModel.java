package com.licenta.SpringBoot.Models.ProgramariModel;

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
@Table(name="Programari")
public class ProgramariModel {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="ID_PROGRAMARE")
	private long id_programare;
	
	@Column(nullable=false,name="ZI")
	private String zi;
	
	@Column(nullable=false,name="ORA")
	private Timestamp ora;
	
	@ManyToOne
	@JoinColumn(name="IDMED")
	private MediciModel programare;

	public long getId_programare() {
		return id_programare;
	}

	public void setId_programare(long id_programare) {
		this.id_programare = id_programare;
	}

	public String getZi() {
		return zi;
	}

	public void setZi(String zi) {
		this.zi = zi;
	}

	

	public Timestamp getOra() {
		return ora;
	}

	public void setOra(Timestamp ora) {
		this.ora = ora;
	}

	public MediciModel getProgramare() {
		return programare;
	}

	public void setProgramare(MediciModel programare) {
		this.programare = programare;
	}

	@Override
	public String toString() {
		return "ProgramariModel [id_programare=" + id_programare + ", zi=" + zi + ", ora=" + ora + ", programare="
				+ programare + "]";
	}
	
}
