

<?php
include("config.php");
include("function.php");


   if($_SERVER["REQUEST_METHOD"] == "POST") {
      // prevent erreur de ->'<-
        $name=$_POST['name'];
  $prenom=$_POST['prenom'];
  $phone=$_POST['telephone'];
  //$adresse=$_POST['adresse'];
  $age=$_POST['age'];
  $tension=$_POST['tension'];
  $poids=$_POST['poids'];
  $sexe=$_POST['sexe'];
      $nom = mysqli_real_escape_string($db,$_POST['name']);
      $prenom = mysqli_real_escape_string($db,$_POST['prenom']);
      $telephone = mysqli_real_escape_string($db,$_POST['telephone']);
      $age = mysqli_real_escape_string($db,$_POST['age']);
      $tension = mysqli_real_escape_string($db,$_POST['tension']);
      $poids = mysqli_real_escape_string($db,$_POST['poids']);
       $sexe = mysqli_real_escape_string($db,$_POST['sexe']);

      


    $sql="INSERT INTO patient (nom,prenom,telephone,age,tension,poids,sexe) VALUES ('$nom', '$prenom', '$telephone','$age', '$tension','$poids', '$sexe')";
      $result = mysqli_query($db,$sql);
      if($result) 
         echo " votre ajoutement est bien fait ";
       
      else echo "Error";
   }
?>


<!DOCTYPE html>
<html>
<head>
  <title> Inscription</title>
  <link rel="stylesheet" type="text/css" href="Css/style1.css">
</head>
<body>

  <h1> Formulaire Inscription</h1>
 <div class="row">
         <div class="col-md-4">
        	<h3 class="text-center text-info"> Ajouter un patient</h3>
        	 <form action="action1.php" method="post" enctype="multipart/form-data">

        	 	<input type="hidden" name="id" value="<?= $id; ?>">

        		<div class="form-group">
        				<input type="text" name="name" value="<?= $name; ?>" class="form-control" placeholder="Entrer le nom" required>
        		</div>
                <div class="form-group">
        				<input type="text" name="prenom" value="<?= $prenom; ?>" class="form-control" placeholder="Entrer le prénom" required>
        		</div>
                <div class="form-group">
        				<input type="tel" name="phone" value="<?= $phone; ?>" class="form-control" placeholder="Entrer Téléphone" required>
        		</div>
        		<!--<div class="form-group">
        				<input type="text" name="adresse" value="<?= $adresse; ?>" class="form-control" placeholder="Entrer Adresse " required>
        		</div>-->
        		<div class="form-group">
        				<input type="text" name="age" value="<?= $age; ?>" class="form-control" placeholder="Entrer Age" required>
        		</div>
            <div class="form-group">
                <input type="text" name="tension" value="<?= $tension; ?>" class="form-control" placeholder=" Entrer la tension " required>
            </div>

           
             <div class="form-group">
                <input type="text" name="poids" value="<?= $poids; ?>" class="form-control" placeholder=" Le poids " required>
            </div>

              <div class="form-group">
                <label for="sexe"><b>Sexe</b></label>
                  <select name="sexe" id="sexe">
                   <option value=""> </option>
                   <option value="Homme">Homme</option>
                   <option value="Femme">Femme</option>
                  </select>
              </div>

            <div class="form-group">
                <input type="text" name="medecin" value="<?= $medecin; ?>" class="form-control" placeholder=" Médecin traitant " required>
            </div>


</body>
</html>
