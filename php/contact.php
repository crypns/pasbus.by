<?php

$name = $_POST['name'];
$phone = $_POST['phone1'];
$comments = $_POST['comments'];
$token = "";
$chat_id = "";

$phone =  preg_replace("/[^0-9]/", "", $phone);
$text = "<b>Имя: </b>".$name.'%0A'."<b>Телефон: </b>".'%2B'.$phone.'%0A'."<b>Сообщение: </b>".$comments;

$sendToTelegram = curl_init("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$text}");
curl_setopt($sendToTelegram, CURLOPT_RETURNTRANSFER, true); // Не возвращать ответ
curl_exec($sendToTelegram); // Делаем запрос
curl_close($sendToTelegram); // Завершаем сеанс cURL