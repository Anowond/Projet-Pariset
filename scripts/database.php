<?php

// Connexion à la base de données (sur un compte créé pour l'occasion)
$pdo = new PDO('mysql:name=localhost;dbname=vetorhino', 'Admin', 'RGGWQ]5eKt0)U0q(');

// Création de la requête de récupération des produits avec la méthode query (car pas de variables inconnues)
$get_products = $pdo->query('SELECT * FROM products');

// Récupération de la réponse dans une variable $post avec la méthode fetchAll (car nombreux résultats possibles)
$posts = $get_products->fetchAll(PDO::FETCH_ASSOC);

// echo '<pre>';
// var_dump($posts);
// echo '</pre>';

// Création de la requête de mise à jour des produits dans la BDD
if (!empty($_POST)) {

    $update_products = $pdo->prepare('UPDATE products SET name=:name, description=:description, image=:image, price=:price WHERE id=:id  ');

    // A FAIRE : RECUPERER LE TABLEAU DES PRODUITS POUR L'ID SAISI ET BINDER LA VALEUR SOUHAITEE PAR LA VALEUR DE $_POST['value']
    // ET LES AUTRES VALEURS PAR LEUR VALEURS DE BASE

    $update_products->bindValue('id', $_POST['id'], PDO::PARAM_INT);
    $update_products->bindValue('name', $_POST['name'], PDO::PARAM_STR);
    $update_products->bindValue('description', $_POST['description'], PDO::PARAM_STR);
    $update_products->bindValue('image', $_POST['image'], PDO::PARAM_STR);
    $update_products->bindValue('price', $_POST['price'], PDO::PARAM_STR);

    if ($_POST['feild'] === 'name') {
        $update_products->bindValue('name', $_POST['value'], PDO::PARAM_STR);
        $update_products->execute();
        $status = 'Modification effectuée !';
    } else if ($_POST['feild'] === 'description') {
        $update_products->bindValue('description', $_POST['value'], PDO::PARAM_STR);
        $update_products->execute();
        $status = 'Modification effectuée !';
    } else if ($_POST['feild'] === 'image') {
        $update_products->bindValue('image', $_POST['value'], PDO::PARAM_STR);
        $update_products->execute();
        $status = 'Modification effectuée !';
    } else if ($_POST['feild'] === 'price') {
        $update_products->bindValue('price', $_POST['value'], PDO::PARAM_STR);
        $update_products->execute();
        $status = 'Modification effectuée !';
    }

    echo '<pre>';
    var_dump($_POST);
    echo '</pre>';

} else {

    $status = '$_POST est vide';

}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <?php if ($status): ?>

        <p>
            <?= $status ?>
        </p>

    <?php endif ?>

    <form action="" method="post" style="display:inline-flex;flex-direction:column">

        <select name="tables" id="tables">



        </select>

        <label for="name">ID du champ à modifier : </label>
        <input type="number" id="id" name="id">

        <label for="feild">Nom du champ à modifier : </label>
        <input type="text" id="feild" name="feild">

        <label for="value">Nouvelle valeur voulue : </label>
        <input type="text" id="value" name="value">

        <input type="submit">

    </form>

</body>

</html>