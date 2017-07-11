<?php
  class Contract_customer_after extends MY_Controller{
    public function __construct(){
      parent::__construct();
       $this->load->model("U_contract_customer_after_model");
    }
    //在办学生
    public function index(){
      $this->load->view('contactCustomerAfter/index.html');
    }
    //签证管理
    public function VisaManagement(){
       $this->load->view('contactCustomerAfter/VisaManagement.html');
    }
   //住宿接机
    public function Accommodation(){
       $this->load->view('contactCustomerAfter/Accommodation.html');
    }
 
  
  }


?>