<?php
  class Contract_customer_middle extends MY_Controller{
    public function __construct(){
      parent::__construct();
       $this->load->model("U_contract_customer_middle_model");
    }
    //签约客户列表
    public function index(){
      $this->load->view('contactCustomerMiddle/index.html');
    }
    //客户资料管理
    public function customerList(){
       $this->load->view('contactCustomerMiddle/customerList.html');
    }
 
   
  }


?>