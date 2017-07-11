<?php
  function returnData($data,$reCode = 0){
    if(isset($_GET['callback'])){
      $callback = $_GET['callback'];
      $reData = array();
      $reData['data'] = $data;
      $reData['reCode'] = $reCode;
      exit($callback."(".json_encode($reData).")");
    }else{
      $reData = array();
      $reData['data'] = $data;
      $reData['reCode'] = $reCode;
      header("Content-Type:application/json; charset=utf-8");
      exit(json_encode($reData));
    }
    
  }

?>