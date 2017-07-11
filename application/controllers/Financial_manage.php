<?php
  class Financial_manage extends MY_Controller{
    public function __construct(){
      parent::__construct();
      $this->load->model("U_finance_manage_model");
    }
    //服务费收费列表
    public function index(){
      $this->load->view('Financialmanage/index.html');
    }
    //服务费退费列表
    public function WithdrawList(){
       $this->load->view('Financialmanage/WithdrawList.html');
    }
    //服务费收支明细
    public function ChargeDetail(){
      $this->load->view('Financialmanage/ChargeDetail.html');
    }
     //学生代收款收入
    public function StudentIncome(){
      $this->load->view('Financialmanage/StudentIncome.html');
    }
     //学生代收款支出
    public function StudentPay(){
      $this->load->view('Financialmanage/StudentPay.html');
    }
     //学生代收款收支明细
    public function StudentDetail(){
      $this->load->view('Financialmanage/StudentDetail.html');
    }
     //财务总收支
    public function FinanceTotal(){
      $this->load->view('Financialmanage/FinanceTotal.html');
    }
 
    
  }


?>