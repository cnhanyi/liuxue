<?php
  class OA_platform extends MY_Controller{
    public function __construct(){
      parent::__construct();
      $this->load->model("U_OA_platform_model");
    }
    //待办工作
    public function index(){
      $this->load->view('OAplatform/index.html');
    }
    //通知公告
    public function PublicInform(){
       $this->load->view('OAplatform/PublicInform.html');
    }
    //学生生日提醒
    public function BirthdayInform(){
      $this->load->view('OAplatform/BirthdayInform.html');
    }
   
  }


?>