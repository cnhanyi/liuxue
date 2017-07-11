<?php

  class U_end_student_model extends CI_model{
    public function __construct(){
      parent::__construct();
    }
    //插入数据
    public function insert_user_data($data){
      $this->db->insert('u_contract_customer_before',$data);
      ;
    }
    //获取最大的用户编
    public function get_user_list($pSize,$offset){
      $count = $this->db->count_all('u_contract_customer_before');//获取所有的数量
      $this->db->select('*');
      $list = $this->db->limit($pSize,$offset)->get('u_contract_customer_before');
      $res = $list->result_array();

      $data['cnt'] = $count;
      $data['list'] = $res;
      return $data;
    }
  //删除用户的编译
  public function del_user_data($data){
    $flag = $this->db->where_in("u_id",$data)->delete("u_contract_customer_before");
    if(!$flag){
      return false;
    }
    return true;
  }
  //获取用户的数据ID
  public function get_uid(){
    $date = date('Y-m-d'); //获取今天的日期
    
  }

}

?>