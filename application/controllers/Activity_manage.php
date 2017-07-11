<?php
  class Activity_manage extends MY_Controller{
    public function __construct(){
      parent::__construct();
      $this->load->model("U_Activity_manage_model");
    }
    //活动计划
    public function index(){
      $this->load->view('Activitymanage/index.html');
    }
    //活动管理
    public function ActivityManage(){
       $this->load->view('Activitymanage/ActivityManage.html');
    }
    //活动总结
    public function ActivitySummary(){
      $this->load->view('Activitymanage/ActivitySummary.html');
    }
     
  }


?>