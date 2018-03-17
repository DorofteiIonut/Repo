package com.licenta.SpringBoot.Models.ProgramModel;

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
@Table(name="PROGRAM")
public class ProgramModel {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="ID_PROGRAM")
	private long id_program;
	
	@Column (nullable=false, name="ZI")
	private String zi;
	
	@Column(nullable=false, name="ORASTART")
	private Timestamp oraStart;
	
	@Column(nullable=false, name="ORAFINAL")
	private Timestamp oraFinal;
	
	@ManyToOne
	@JoinColumn(name="IDMED")
	private MediciModel medic;

	public long getId_program() {
		return id_program;
	}

	public void setId_program(long id_program) {
		this.id_program = id_program;
	}

	public String getZi() {
		return zi;
	}

	public void setZi(String zi) {
		this.zi = zi;
	}

	public Timestamp getOraStart() {
		return oraStart;
	}

	public void setOraStart(Timestamp oraStart) {
		this.oraStart = oraStart;
	}

	public Timestamp getOraFinal() {
		return oraFinal;
	}

	public void setOraFinal(Timestamp oraFinal) {
		this.oraFinal = oraFinal;
	}

	public MediciModel getMedic() {
		return medic;
	}

	public void setMedic(MediciModel medic) {
		this.medic = medic;
	}

	@Override
	public String toString() {
		return "ProgramModel [id_program=" + id_program + ", zi=" + zi + ", oraStart=" + oraStart + ", oraFinal="
				+ oraFinal + ", medic=" + medic + "]";
	}

	
	
	
	}
