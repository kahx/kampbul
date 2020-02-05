<?php
	class API{
		const DB_SERVER = "localhost";
		const DB_USER = "root";
		const DB_PASS = "";
		const DB = "dbname";
		private $conn = NULL;
		public $data;
		public function __construct(){
			$this->dbConnect();
		}
		private function dbConnect(){
			$this-> conn = new mysqli(self::DB_SERVER, self::DB_USER, self::DB_PASS, self::DB);
			if($this -> conn -> connect_error){
				die("Hata");
			}
			$this->conn->set_charset("utf8");
		}
		public function getData($param){
			if($param == "all"){
				$sql = "select * from veriler order by baslik asc";
			}else{
				$sql = "select * from veriler where sehir='".$param."' order by baslik asc";
			}
			$result = $this->conn->query($sql);
			if($result->num_rows > 0){
				while($rs = $result->fetch_object()){
					$data["v".$rs->id]["baslik"]=$rs->baslik;
					$data["v".$rs->id]["aciklama"]=$rs->aciklama;
					$data["v".$rs->id]["id"]=$rs->id;
					$data["v".$rs->id]["foto"]=$rs->foto;
					$data["v".$rs->id]["adres"]=$rs->adres;
				}
			}else{
				$data["Hata"]="1";
			}	
				echo $this->JSON($data);
		}
		
		public function getBolge($b){
			$sql = "select * from veriler where bolge='".$b."' order by id desc";
			$result = $this->conn->query($sql);
			if($result->num_rows > 0){
				while($rs = $result->fetch_object()){
					$data["v".$rs->id]["baslik"]=$rs->baslik;
					$data["v".$rs->id]["aciklama"]=$rs->aciklama;
					$data["v".$rs->id]["id"]=$rs->id;
					$data["v".$rs->id]["foto"]=$rs->foto;
					$data["v".$rs->id]["adres"]=$rs->adres;
				}
			}else{
				$data["Hata"]="1";
			}	
				echo $this->JSON($data);
		}
		public function sehir(){			
			$sql = "select * from veriler group by sehir having count(*)>=1";
			$result = $this->conn->query($sql);
			if($result->num_rows > 0){
				while($rs = $result->fetch_object()){
					$data["v".$rs->id]["sehir"]=$rs->sehir;
				}
			}else{
				$data["Hata"]="1";
			}	
				echo $this->JSON($data);
		}
		public function bolge(){			
			$sql = "select * from veriler group by bolge having count(*)>=1";
			$result = $this->conn->query($sql);
			if($result->num_rows > 0){
				while($rs = $result->fetch_object()){
					$data["v".$rs->id]["bolge"]=$rs->bolge;
				}
			}else{
				$data["Hata"]="1";
			}	
				echo $this->JSON($data);
		}
		public function id($i){
			$sql = "select * from veriler where id in (".$i.") order by baslik asc";
			$result = $this->conn->query($sql);
			if($result->num_rows > 0){
				while($rs = $result->fetch_object()){
					$data["v".$rs->id]["baslik"]=$rs->baslik;
					$data["v".$rs->id]["aciklama"]=$rs->aciklama;
					$data["v".$rs->id]["id"]=$rs->id;
					$data["v".$rs->id]["foto"]=$rs->foto;
					$data["v".$rs->id]["adres"]=$rs->adres;
				}
			}else{
				$data["Hata"]="1";
			}	
				echo $this->JSON($data);
		}		
		private function JSON($veri){
			if(is_array($veri)){
				return json_encode($veri);
			}
		}
	}
	$testNesne = new API();
	if($_SERVER["REQUEST_METHOD"]=="GET"){
		if(isset($_GET["param"])){
			$testNesne->getData($_GET["param"]);
		}else if(isset($_GET["getBolge"])){
			$testNesne->getBolge($_GET["getBolge"]);
		}else if(isset($_GET["sehir"])){
			$testNesne->sehir();
		}else if(isset($_GET["bolge"])){
			$testNesne->bolge();
		}else if(isset($_GET["id"])){
			$testNesne->id($_GET["id"]);
		}
	}
?>