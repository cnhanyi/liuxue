<?php
  class End_student extends MY_Controller{
    public function __construct(){
      parent::__construct();
       $this->load->model("U_end_student_model");
    }
    //结案学生列表
    public function index(){
      $this->load->view('EndStudent/index.html');
    }
   //佣金管理
    public function MoneyManage(){
       $this->load->view('EndStudent/MoneyManage.html');
    }
    //客服回访记录
    public function ConsultBackRecord(){
      $this->load->view('EndStudent/ConsultBackRecord.html');
    }
   
   
  }


?>