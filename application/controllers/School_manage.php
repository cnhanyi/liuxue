<?php
  class School_manage extends MY_Controller{
    public function __construct(){
      parent::__construct();
       $this->load->model("U_school_manage_model");
    }
    //院校管理
    public function index(){
      $this->load->view('SchoolManage/index.html');
    }
  
    
  }


?>