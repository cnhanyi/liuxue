<?php
  class Index extends MY_Controller{

      public function __construct(){
          parent::__construct();
      }
      public function index(){
        $this->load->view('index/index.html');
      }
      public function getUserInfo(){
        if(!$this->session->islogin){
          returnData('用户没有登陆',-103);
        }else{
          $data['account'] = $this->session->account;
          returnData($data);
        }
      }
  }


?>