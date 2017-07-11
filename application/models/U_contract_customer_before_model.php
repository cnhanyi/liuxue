<?php

  class U_contract_customer_before_model extends CI_model{
    public function __construct(){
      parent::__construct();
    }
    /**
     * 新增留学咨询学生
     *
     * @param [type] $data
     * @return void
     */
    public function addStudentItem($data){
      $this->db->insert('u_student_info',$data);
      ;
    }
   /**
    * 获取学生列表
    *
    * @param [type] $pSize
    * @param [type] $offset
    * @return void
    */
    public function getStudentList($pSize,$offset){
      $count = $this->db->count_all('u_student_info');//获取所有的数量
      $this->db->select('*');
      $list = $this->db->limit($pSize,$offset)->get('u_student_info');
      $res = $list->result_array();

      $data['cnt'] = $count;
      $data['list'] = $res;
      return $data;
    }
   /**
    * 删除学生列表
    *
    * @param [type] $data
    * @return void
    */
  public function delStudentItem($data){
    $flag = $this->db->where_in("u_student_id",$data)->delete("u_student_info");
    if(!$flag){
      return false;
    }
    return true;
  }
  /**
   * 生成学生的编号
   *
   * @return void
   */
  private function makeUID(){
    $date = date('Y-m-d'); //获取今天的日期
  
  }

}

?>