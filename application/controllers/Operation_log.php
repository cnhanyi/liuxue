<?php
  class Operation_log extends MY_Controller{
    public function __construct(){
      parent::__construct();
      $this->load->model("U_operation_log_model");
    }
    //操作日志
    public function index(){
      $this->load->view('OperationLog/index.html');
    }
    //用户账号
    public function User(){
       $this->load->view('OperationLog/User.html');
    }
   
   
  }


?>