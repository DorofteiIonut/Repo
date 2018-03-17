package com.licenta.SpringBoot.Models.CabinetModel;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.licenta.SpringBoot.Models.MediciModel.MediciModel;

@Entity
@Table(name="CABINET")
public class CabinetModel {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="IDCAB")
	private long idCab;
	
	@Column(nullable=false, name="CABADRESS")
	private  String cabAdress;
	
	@Column(name="TIP")
	private String tip;
	
	@Column(name="DENUMIRE")
	private String denumire;
	
	@ManyToMany(cascade=CascadeType.ALL)
	@JoinTable(name="CABINETMEDICI", joinColumns=@JoinColumn(name="ID_CABINET", referencedColumnName="IDCAB"),
			inverseJoinColumns=@JoinColumn(name="ID_MEDIC", referencedColumnName="IDMED"))
	private List<MediciModel> listaMedici=new ArrayList<MediciModel>();

	public long getIdCab() {
		return idCab;
	}

	public void setIdCab(long idCab) {
		this.idCab = idCab;
	}

	public String getCabAdress() {
		return cabAdress;
	}

	public void setCabAdress(String cabAdress) {
		this.cabAdress = cabAdress;
	}

	public String getTip() {
		return tip;
	}

	public void setTip(String tip) {
		this.tip = tip;
	}

	public String getDenumire() {
		return denumire;
	}

	public void setDenumire(String denumire) {
		this.denumire = denumire;
	}

	public List<MediciModel> getListaMedici() {
		return listaMedici;
	}

	public void setListaMedici(List<MediciModel> listaMedici) {
		this.listaMedici = listaMedici;
	}

	@Override
	public String toString() {
		return "CabinetModel [idCab=" + idCab + ", cabAdress=" + cabAdress + ", tip=" + tip + ", denumire=" + denumire
				+ ", listaMedici=" + listaMedici + "]";
	}

	

}
