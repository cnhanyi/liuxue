$(function(){
  //增加用户
  $('#table').bootstrapTable({
    columns:[{
            type: 'selection',
            width: 60,
            align: 'center',
          },{
            title: '客户编号',
            width: 140,
            field: 'u_id'
          },{
            title: '学生姓名',
            width:90,
            field: 'u_name'
          },{
            title: '手机号',
            width:100,
            field: 'u_phone'
          },{
            title: '微信号',
            width:90,
            field: 'u_wechat'
          },{
            title: '邮箱',
            width:90,
            field: 'u_email'
          },{
            title: '客户来源',
            width:90,
            field: 'u_source'
          },{
            title: '学校',
            width:90,
            field: 'u_school'
          },{
            title: '签证类型',
            width:90,
            field: 'u_visa'
          },{
            title: '目前学校',
            width:90,
            field: 'u_current_education'
          },{
            title: '专业',
            width:90,
            field: 'u_major'
          },{
            title: '所在城市',
            width:90,
            field: 'u_city'
          },{
            title: '地址',
            width:90,
            field: 'u_address'
          },{
            title: '意向级别',
            width:90,
            field: 'u_intent_level'
          },{
            title: '顾问',
            width:90,
            field: 'u_adviser'
          },{
            title: '有效性',
            width:90
          }]
  })
  //转移顾客的记录
  $('#translateTable').bootstrapTable({
    columns:[{
            type: 'selection',
            width: 60,
            align: 'center',
          },{
            title: '客户编号',
            width: 140,
            field: 'u_id'
          },{
            title: '学生姓名',
            width:90,
            field: 'u_name'
          },{
            title: '手机号',
            width:100,
            field: 'u_phone'
          },{
            title: '微信号',
            width:90,
            field: 'u_wechat'
          },{
            title: '邮箱',
            width:90,
            field: 'u_email'
          },{
            title: '原始顾问',
            width:90,
            field: 'u_source'
          },{
            title: '创建日期',
            width:90,
            field: 'u_school'
          },{
            title: '转移顾问日期',
            width:90,
            field: 'u_visa'
          }]
  })
  //回访记录
  $('#visitRecordTable').bootstrapTable({
    columns:[{
            type: 'selection',
            width: 60,
            align: 'center',
          },{
            title: '学生姓名',
            width:90,
            field: 'u_name'
          },{
            title: '跟踪方式',
            width:100,
            field: 'u_phone'
          },{
            title: '咨询阶段',
            width:90,
            field: 'u_wechat'
          },{
            title: '意向级别',
            width:90,
            field: 'u_email'
          },{
            title: '咨询日期',
            width:90,
            field: 'u_source'
          },{
            title: '咨询时长',
            width:90,
            field: 'u_school'
          },{
            title: '上次通话时间',
            width:90,
            field: 'u_visa'
          },{
            title: '创建人',
            width:90,
            field: 'u_current_education'
          },{
            title: '创建日期',
            width:90,
            field: 'u_major'
          },{
            title: '操作',
            width:90,
            field: 'u_city'
          }]
  })

    //回访提醒
  $('#visitRemindTable').bootstrapTable({
    columns:[{
            type: 'selection',
            width: 60,
            align: 'center',
          },{
            title: '咨询记录编码',
            width:60,
            field: 'u_code'
          },{
            title: '学生姓名',
            width:100,
            field: 'u_name'
          },{
            title: '咨询内容',
            width:300,
            field: 'u_content'
          },{
            title: '类型',
            width:90,
            field: 'u_type'
          },{
            title: '访问时间',
            width:90,
            field: 'u_time'
          },{
            title: '下次访问时间',
            width:90,
            field: 'u_next_time'
          },{
            title: '创建日期',
            width:90,
            field: 'u_create_time'
          },{
            title: '创建人',
            width:90,
            field: 'u_creater'
          },{
            title: '创建部门',
            width:90,
            field: 'u_department'
          },{
            title: '备注',
            width:90,
            field: 'u_intro'
          },{
            title: '操作',
            width:90,
            field: 'u_oper'
          }]
  })
  
  
    //咨询预案
  $('#conPlanTable').bootstrapTable({
    columns:[{
            type: 'selection',
            width: 60,
            align: 'center',
          },{
            title: '预案名称',
            width:60,
            field: 'u_plan_name'
          },{
            title: '学生姓名',
            width:100,
            field: 'u_name'
          },{
            title: '预计上门日期',
            width:100,
            field: 'u_time'
          },{
            title: '上门人数',
            width:90,
            field: 'u_number'
          },{
            title: '留学项目',
            width:90,
            field: 'u_project'
          },{
            title: '留学国家',
            width:90,
            field: 'u_nation'
          },{
            title: '签约可能性',
            width:90,
            field: 'u_possible'
          },{
            title: '客户关注点',
            width:90,
            field: 'u_focus'
          },{
            title: '创建人',
            width:90,
            field: 'u_creater'
          },{
            title: '创建日期',
            width:90,
            field: 'u_create_date'
          },{
            title: '操作',
            width:90,
            field: 'u_oper'
          }]
  })
  
     //未签约分析
  $('#contractAnalysisTable').bootstrapTable({
    columns:[{
            type: 'selection',
            width: 60,
            align: 'center',
          } ,{
            title: '学生姓名',
            width:100,
            field: 'u_name'
          },{
            title: '留学国家',
            width:90,
            field: 'u_nation'
          },{
            title: '咨询时间',
            width:100,
            field: 'u_time'
          },{
            title: '上门人数',
            width:90,
            field: 'u_number'
          },{
            title: '客户未签约原因',
            width:90,
            field: 'u_reason'
          } ,{
            title: '创建人',
            width:90,
            field: 'u_creater'
          },{
            title: '创建日期',
            width:90,
            field: 'u_create_date'
          },{
            title: '操作',
            width:90,
            field: 'u_oper'
          }]
  })
  
   //签约总结
  $('#contractSummaryTable').bootstrapTable({
    columns:[{
            type: 'selection',
            width: 60,
            align: 'center',
          } ,{
            title: '学生姓名',
            width:100,
            field: 'u_name'
          },{
            title: '留学国家',
            width:90,
            field: 'u_nation'
          },{
            title: '咨询时间',
            width:100,
            field: 'u_time'
          },{
            title: '上门人数',
            width:90,
            field: 'u_number'
          },{
            title: '客户签约总结',
            width:90,
            field: 'u_conclusion'
          } ,{
            title: '创建人',
            width:90,
            field: 'u_creater'
          },{
            title: '创建日期',
            width:90,
            field: 'u_create_date'
          },{
            title: '操作',
            width:90,
            field: 'u_oper'
          }]
  })
  
     //待办工作
  $('#WaitingDoneTable').bootstrapTable({
    columns:[{
            type: 'selection',
            width: 60,
            align: 'center',
          } ,{
            title: '提醒节点',
            width:400,
            field: 'u_warning_time'
          },{
            title: '提醒人',
            width:90,
            field: 'u_warning_name'
          },{
            title: '代办人',
            width:100,
            field: 'u_help_name'
          },{
            title: '是否查看',
            width:90,
            field: 'u_if_view'
          },{
            title: '查看日期',
            width:90,
            field: 'u_view_time'
          } ,{
            title: '操作',
            width:90,
            field: 'u_oper'
          }]
  })
  
     //通知公告
  $('#PublicInformTable').bootstrapTable({
    columns:[{
            type: 'selection',
            width: 60,
            align: 'center',
          } ,{
            title: '序号',
            width:100,
            field: 'u_number'
          },{
            title: '公告标题',
            width:90,
            field: 'u_title'
          },{
            title: '公告类型',
            width:100,
            field: 'u_type'
          },{
            title: '发布部门',
            width:90,
            field: 'u_department'
          },{
            title: '发布时间',
            width:90,
            field: 'u_time'
          },{
            title: '备注',
            width:290,
            field: 'u_note'
          }  ,{
            title: '操作',
            width:90,
            field: 'u_oper'
          }]
  })
       //学生生日提醒
  $('#BirthdayInformTable').bootstrapTable({
    columns:[{
            type: 'selection',
            width: 60,
            align: 'center',
          } ,{
            title: '学生编号',
            width:100,
            field: 'u_number'
          },{
            title: '学生姓名',
            width:90,
            field: 'u_name'
          },{
            title: '学生生日',
            width:100,
            field: 'u_birthday'
          },{
            title: '移动电话',
            width:90,
            field: 'u_phone'
          },{
            title: '客户类型',
            width:90,
            field: 'u_type'
          },{
            title: '客户来源',
            width:90,
            field: 'u_source'
          }  ,{
            title: '操作',
            width:90,
            field: 'u_oper'
          }]
  })
       //活动计划
  $('#ActivityPlanTable').bootstrapTable({
    columns:[{
            type: 'selection',
            width: 60,
            align: 'center',
          } ,{
            title: '活动计划名称',
            width:100,
            field: 'u_plan_name'
          },{
            title: '计划开始时间',
            width:90,
            field: 'u_start_date'
          },{
            title: '计划结束时间',
            width:100,
            field: 'u_end_date'
          },{
            title: '活动计划地点',
            width:90,
            field: 'u_point'
          },{
            title: '活动计划费用',
            width:90,
            field: 'u_spend'
          },{
            title: '审核状态',
            width:90,
            field: 'u_check_statue'
          } ,{
            title: '创建人',
            width:90,
            field: 'u_creater'
          } ,{
            title: '创建日期',
            width:90,
            field: 'u_create_date'
          } ,{
            title: '下一步操作项',
            width:90,
            field: 'u_next_oper'
          } ,{
            title: '审核状态',
            width:90,
            field: 'u_second_statue'
          } ,{
            title: '操作项',
            width:90,
            field: 'u_oper_type'
          }  ,{
            title: '操作',
            width:90,
            field: 'u_oper'
          }]
  })  
  //活动计划
  $('#ActivityManageTable').bootstrapTable({
    columns:[{
            type: 'selection',
            width: 60,
            align: 'center',
          } ,{
            title: '所属计划名称',
            width:100,
            field: 'u_plan_name'
          },{
            title: '活动名称',
            width:90,
            field: 'u_activity_name'
          },{
            title: '活动开始日期',
            width:100,
            field: 'u_start_date'
          },{
            title: '活动结束日期',
            width:90,
            field: 'u_end_date'
          },{
            title: '活动地点',
            width:90,
            field: 'u_point'
          },{
            title: '活动负责人',
            width:90,
            field: 'u_manager'
          } ,{
            title: '资源数',
            width:90,
            field: 'u_number'
          } ,{
            title: '活动经费',
            width:90,
            field: 'u_spend'
          } ,{
            title: '创建人',
            width:90,
            field: 'u_creater'
          } ,{
            title: '创建日期',
            width:90,
            field: 'u_create_date'
          } ,{
            title: '操作',
            width:90,
            field: 'u_oper'
          }]
  })
   //活动总结
  $('#ActivitySummaryTable').bootstrapTable({
    columns:[{
            type: 'selection',
            width: 60,
            align: 'center',
          } ,{
            title: '所属计划名称',
            width:100,
            field: 'u_plan_name'
          },{
            title: '活动名称',
            width:90,
            field: 'u_activity_name'
          },{
            title: '活动开始日期',
            width:100,
            field: 'u_start_date'
          },{
            title: '活动结束日期',
            width:90,
            field: 'u_end_date'
          },{
            title: '活动地点',
            width:90,
            field: 'u_point'
          },{
            title: '活动负责人',
            width:90,
            field: 'u_manager'
          } ,{
            title: '资源数',
            width:90,
            field: 'u_number'
          } ,{
            title: '活动经费',
            width:90,
            field: 'u_spend'
          } ,{
            title: '创建人',
            width:90,
            field: 'u_creater'
          } ,{
            title: '创建日期',
            width:90,
            field: 'u_create_date'
          } ,{
            title: '操作',
            width:90,
            field: 'u_oper'
          }]
  })
  
    //签约客户列表
  $('#SigningcustomerTabel').bootstrapTable({
    columns:[{
            type: 'selection',
            width: 60,
            align: 'center',
          } ,{
            title: '学生编号',
            width:100,
            field: 'u_number'
          },{
            title: '学生姓名',
            width:90,
            field: 'u_name'
          },{
            title: '移动电话',
            width:100,
            field: 'u_phone'
          },{
            title: '顾问',
            width:90,
            field: 'u_consult'
          },{
            title: '客户来源',
            width:90,
            field: 'u_source'
          },{
            title: '固定电话',
            width:90,
            field: 'u_fixed_number'
          } ,{
            title: '微信',
            width:90,
            field: 'u_wechat'
          } ,{
            title: '推荐人',
            width:90,
            field: 'u_recommend'
          } ,{
            title: '意向级别',
            width:90,
            field: 'u_intent_rank'
          } ,{
            title: '来源国家',
            width:90,
            field: 'u_from_nation'
          } ,{
            title: '来源城市',
            width:100,
            field: 'u_from_city'
          },{
            title: '申请学历',
            width:90,
            field: 'u_apply_level'
          },{
            title: '意向国家',
            width:100,
            field: 'u_intent_nation'
          },{
            title: '意向学校',
            width:90,
            field: 'u_intent_school'
          },{
            title: '目前学历',
            width:90,
            field: 'u_level'
          },{
            title: '所在学校',
            width:90,
            field: 'u_school'
          } ,{
            title: '签证种类',
            width:90,
            field: 'u_visa_type'
          } ,{
            title: '咨询条数',
            width:90,
            field: 'u_consult_number'
          } ,{
            title: '创建人',
            width:90,
            field: 'u_creater'
          } ,{
            title: '创建日期',
            width:90,
            field: 'u_create_date'
          } ,{
            title: '更新日期',
            width:90,
            field: 'u_update_date'
          },{
            title: '操作',
            width:90,
            field: 'u_oper'
          }]
  })
  
   //资料列表
  $('#customerListTabel').bootstrapTable({
    columns:[{
            type: 'selection',
            width: 60,
            align: 'center',
          } ,{
            title: '合同编号',
            width:100,
            field: 'u_number'
          },{
            title: '签约客户',
            width:90,
            field: 'u_name'
          },{
            title: '合同类型',
            width:100,
            field: 'u_type'
          },{
            title: '留学国家',
            width:90,
            field: 'u_nation'
          },{
            title: '留学项目',
            width:90,
            field: 'u_plan'
          },{
            title: '顾问',
            width:90,
            field: 'u_consult'
          } ,{
            title: '签约日期',
            width:90,
            field: 'u_sign_date'
          } ,{
            title: '合同金额',
            width:90,
            field: 'u_money'
          } ,{
            title: '资源成本',
            width:90,
            field: 'u_source_cost'
          } ,{
            title: '欠缴金额',
            width:90,
            field: 'u_owe_money'
          } ,{
            title: '合同状态',
            width:100,
            field: 'u_statue'
          },{
            title: '后期主管',
            width:90,
            field: 'u_before_manager'
          },{
            title: '选校负责人',
            width:100,
            field: 'u_choose_manager'
          },{
            title: '后期经理',
            width:90,
            field: 'u_after_manager'
          },{
            title: '申请办理负责人',
            width:90,
            field: 'u_apply_manager'
          },{
            title: '签约顾问',
            width:90,
            field: 'u_sign_consult'
          } ,{
            title: '住宿接机办理人',
            width:90,
            field: 'u_accommodation_manager'
          } ,{
            title: '下一步操作项',
            width:90,
            field: 'u_next_oper'
          } ,{
            title: '审核状态',
            width:90,
            field: 'u_check_statue'
          } ,{
            title: '操作项',
            width:90,
            field: 'u_oper_type'
          }  ,{
            title: '操作',
            width:90,
            field: 'u_oper'
          }]
  })
  //资料列表
  $('#DoingStudentTable').bootstrapTable({
    columns:[{
            type: 'selection',
            width: 60,
            align: 'center',
          } ,{
            title: '选校编号',
            width:100,
            field: 'u_choose_number'
          },{
            title: '合同单号',
            width:90,
            field: 'u_number'
          },{
            title: '申请学校名称',
            width:100,
            field: 'u_apply_school'
          },{
            title: '学院名称',
            width:90,
            field: 'u_academy'
          },{
            title: '申请专业',
            width:90,
            field: 'u_apply_major'
          },{
            title: '专业链接',
            width:90,
            field: 'u_major_link'
          } ,{
            title: '申请层次',
            width:90,
            field: 'u_apply_level'
          } ,{
            title: '合作方',
            width:90,
            field: 'u_partner'
          } ,{
            title: '创建人',
            width:90,
            field: 'u_creater'
          } ,{
            title: '创建日期',
            width:90,
            field: 'u_create_date'
          } ,{
            title: '操作',
            width:90,
            field: 'u_oper'
          }]
  })
  
   //资料列表
  $('#VisaManagementTable').bootstrapTable({
    columns:[{
            type: 'selection',
            width: 60,
            align: 'center',
          } ,{
            title: '签证编号',
            width:100,
            field: 'u_visa_number'
          },{
            title: '学生姓名',
            width:90,
            field: 'u_name'
          },{
            title: '签证时对应国家',
            width:100,
            field: 'u_visa_nation'
          },{
            title: '是否获签',
            width:90,
            field: 'u_visa_if'
          },{
            title: '是否递交',
            width:90,
            field: 'u_apply_if'
          },{
            title: '递交日期',
            width:90,
            field: 'u_apply_date'
          } ,{
            title: '递交负责人',
            width:90,
            field: 'u_apply_manager'
          } ,{
            title: '获签日期',
            width:90,
            field: 'u_visa_date'
          } ,{
            title: 'TRN号码',
            width:90,
            field: 'u_TRN_number'
          } ,{
            title: '签证方式',
            width:90,
            field: 'u_visa_type'
          } ,{
            title: '之前签证史',
            width:90,
            field: 'u_visa_history'
          } ,{
            title: '创建人',
            width:90,
            field: 'u_creater'
          } ,{
            title: '创建时间',
            width:90,
            field: 'u_create_date'
          } ,{
            title: '操作',
            width:90,
            field: 'u_oper'
          }]
  })
  
   //资料列表
  $('#AccommodationTable').bootstrapTable({
    columns:[{
            type: 'selection',
            width: 60,
            align: 'center',
          } ,{
            title: '姓名',
            width:100,
            field: 'u_visa_number'
          },{
            title: '学生移动电话',
            width:90,
            field: 'u_name'
          },{
            title: '学生固定电话',
            width:100,
            field: 'u_visa_nation'
          },{
            title: '学生邮箱',
            width:90,
            field: 'u_visa_if'
          },{
            title: '是否安排接机',
            width:90,
            field: 'u_apply_if'
          },{
            title: '接机时间',
            width:90,
            field: 'u_apply_date'
          } ,{
            title: '接机地址',
            width:90,
            field: 'u_apply_manager'
          } ,{
            title: '行李件数',
            width:90,
            field: 'u_visa_date'
          } ,{
            title: '司机姓名',
            width:90,
            field: 'u_TRN_number'
          } ,{
            title: '是否安排住宿',
            width:90,
            field: 'u_visa_type'
          } ,{
            title: '入住时间',
            width:90,
            field: 'u_visa_history'
          } ,{
            title: '住地联系人姓名',
            width:90,
            field: 'u_creater'
          } ,{
            title: '住地联系人电话',
            width:90,
            field: 'u_create_date'
          } ,{
            title: '确认到达',
            width:90,
            field: 'u_create_date'
          } ,{
            title: '确认住宿已安排',
            width:90,
            field: 'u_create_date'
          } ,{
            title: '操作',
            width:90,
            field: 'u_oper'
          }]
  })
  
     //结案学生列表
  $('#EndStudentListTable').bootstrapTable({
    columns:[{
            type: 'selection',
            width: 60,
            align: 'center',
          } ,{
            title: '资料编号',
            width:100,
            field: 'u_number'
          },{
            title: '学生姓名',
            width:90,
            field: 'u_name'
          },{
            title: '性别',
            width:100,
            field: 'u_sex'
          },{
            title: '电话',
            width:90,
            field: 'u_phone'
          },{
            title: '微信',
            width:90,
            field: 'u_wechat'
          },{
            title: '就读学校',
            width:90,
            field: 'u_school'
          } ,{
            title: '就读专业',
            width:90,
            field: 'u_major'
          } ,{
            title: '就读层次',
            width:90,
            field: 'u_level'
          } ,{
            title: '是否发invoice给校方',
            width:90,
            field: 'u_invoice'
          } ,{
            title: '后期顾问',
            width:90,
            field: 'u_consult'
          } ,{
            title: '佣金是否支付',
            width:90,
            field: 'u_pay'
          } ,{
            title: '支付佣金日期',
            width:90,
            field: 'u_pay_date'
          } ,{
            title: '满意度',
            width:90,
            field: 'u_satisfaction'
          } ,{
            title: '备注',
            width:90,
            field: 'u_note'
          }  ,{
            title: '操作',
            width:90,
            field: 'u_oper'
          }]
  })
  
   //佣金管理
  $('#MoneyManageTable').bootstrapTable({
    columns:[{
            type: 'selection',
            width: 60,
            align: 'center',
          } ,{
            title: '资料编号',
            width:100,
            field: 'u_number'
          },{
            title: '学生姓名',
            width:90,
            field: 'u_name'
          },{
            title: '就读学校',
            width:90,
            field: 'u_school'
          } ,{
            title: '就读专业',
            width:90,
            field: 'u_major'
          },{
            title: '校方联系人',
            width:100,
            field: 'u_contract'
          },{
            title: '校方电话',
            width:90,
            field: 'u_school_phone'
          },{
            title: '联系人邮件',
            width:90,
            field: 'u_email'
          } ,{
            title: '佣金金额',
            width:90,
            field: 'u_money'
          } ,{
            title: '佣金结算日期',
            width:90,
            field: 'u_calculate_date'
          } ,{
            title: '是否支付佣金',
            width:90,
            field: 'u_pay'
          } ,{
            title: '支付日期',
            width:90,
            field: 'u_pay_date'
          } ,{
            title: '付款方式',
            width:90,
            field: 'u_pay_type'
          } ,{
            title: '收款确认人',
            width:90,
            field: 'u_confirm'
          } ,{
            title: '确认日期',
            width:90,
            field: 'u_confirm_date'
          } ,{
            title: '创建人',
            width:90,
            field: 'u_creater'
          } ,{
            title: '创建日期',
            width:90,
            field: 'u_create_date'
          }  ,{
            title: '操作',
            width:90,
            field: 'u_oper'
          }]
  })
  
    //客户回访记录
  $('#ConsultBakRecordTable').bootstrapTable({
    columns:[{
            type: 'selection',
            width: 60,
            align: 'center',
          } ,{
            title: '合同编号',
            width:100,
            field: 'u_contact_number'
          },{
            title: '学生姓名',
            width:90,
            field: 'u_name'
          },{
            title: '回访序号',
            width:90,
            field: 'u_number'
          } ,{
            title: '回访方式',
            width:90,
            field: 'u_type'
          },{
            title: '回访时长',
            width:100,
            field: 'u_time'
          },{
            title: '满意度',
            width:90,
            field: 'u_satisfaction'
          },{
            title: '回访内容',
            width:90,
            field: 'u_content'
          } ,{
            title: '回访记录',
            width:90,
            field: 'u_record'
          }  ,{
            title: '创建人',
            width:90,
            field: 'u_creater'
          } ,{
            title: '创建日期',
            width:90,
            field: 'u_create_date'
          }  ,{
            title: '操作',
            width:90,
            field: 'u_oper'
          }]
  })
  
  
    //院校管理
  $('#SchoolManageTable').bootstrapTable({
    columns:[{
            type: 'selection',
            width: 60,
            align: 'center',
          } ,{
            title: '序号',
            width:100,
            field: 'u_number'
          },{
            title: '学校名称',
            width:90,
            field: 'u_school_name'
          },{
            title: '学校网址',
            width:90,
            field: 'u_school_web'
          } ,{
            title: '学校类型',
            width:90,
            field: 'u_school_type'
          },{
            title: '学校介绍',
            width:100,
            field: 'u_school_intro'
          },{
            title: '校方联系人姓名',
            width:90,
            field: 'u_contract_name'
          },{
            title: '联系人电话',
            width:90,
            field: 'u_contract_phone'
          } ,{
            title: '联系人电子邮件',
            width:90,
            field: 'u_contract_email'
          }  ,{
            title: '佣金比例',
            width:90,
            field: 'u_scale'
          } ,{
            title: '操作',
            width:90,
            field: 'u_oper'
          }]
  })
  
   //收费列表
  $('#IncomeListTable').bootstrapTable({
    columns:[{
            type: 'selection',
            width: 60,
            align: 'center',
          } ,{
            title: '收费序号',
            width:100,
            field: 'u_number'
          },{
            title: '收费类型',
            width:90,
            field: 'u_charge_style'
          },{
            title: '合同编号',
            width:90,
            field: 'u_contact_web'
          } ,{
            title: '学生姓名',
            width:90,
            field: 'u_name'
          },{
            title: '收费次序',
            width:100,
            field: 'u_charge_number'
          },{
            title: '收费日期',
            width:90,
            field: 'u_charge_date'
          },{
            title: '收款经手人',
            width:90,
            field: 'u_contact_name'
          } ,{
            title: '合同金额',
            width:90,
            field: 'u_contact_money'
          }  ,{
            title: '本次缴费',
            width:90,
            field: 'u_this_money'
          }  ,{
            title: '收款方式',
            width:90,
            field: 'u_charge_type'
          } ,{
            title: '币种',
            width:90,
            field: 'u_currency'
          }  ,{
            title: '创建人',
            width:90,
            field: 'u_creater'
          }  ,{
            title: '创建日期',
            width:90,
            field: 'u_create_date'
          }  ,{
            title: '备注',
            width:90,
            field: 'u_note'
          } ,{
            title: '操作',
            width:90,
            field: 'u_oper'
          }]
  })
  
    //退费列表
  $('#WithdrawListTable').bootstrapTable({
    columns:[{
            type: 'selection',
            width: 60,
            align: 'center',
          } ,{
            title: '退费序号',
            width:100,
            field: 'u_number'
          },{
            title: '退费类型',
            width:90,
            field: 'u_withdraw_style'
          },{
            title: '合同编号',
            width:90,
            field: 'u_contact_web'
          } ,{
            title: '学生姓名',
            width:90,
            field: 'u_name'
          } ,{
            title: '退费日期',
            width:90,
            field: 'u_withdraw_date'
          },{
            title: '退费经手人',
            width:90,
            field: 'u_contact_name'
          } ,{
            title: '合同金额',
            width:90,
            field: 'u_contact_money'
          }  ,{
            title: '本次退费',
            width:90,
            field: 'u_this_money'
          }  ,{
            title: '退费方式',
            width:90,
            field: 'u_withdraw_type'
          } ,{
            title: '币种',
            width:90,
            field: 'u_currency'
          }  ,{
            title: '创建人',
            width:90,
            field: 'u_creater'
          }  ,{
            title: '创建日期',
            width:90,
            field: 'u_create_date'
          }  ,{
            title: '备注',
            width:90,
            field: 'u_note'
          } ,{
            title: '操作',
            width:90,
            field: 'u_oper'
          }]
  })
     //服务费收支明细
  $('#ChargeDetailTable').bootstrapTable({
    columns:[{
            type: 'selection',
            width: 60,
            align: 'center',
          } ,{
            title: '合同编号',
            width:90,
            field: 'u_contact_web'
          } ,{
            title: '学生姓名',
            width:90,
            field: 'u_name'
          }  ,{
            title: '合同金额',
            width:90,
            field: 'u_contact_money'
          }  ,{
            title: '总缴费',
            width:90,
            field: 'u_total_oncome'
          }   ,{
            title: '总退费',
            width:90,
            field: 'u_total_withdraw'
          } ,{
            title: '总代收费',
            width:90,
            field: 'u_total_money'
          } ,{
            title: '佣金收入',
            width:90,
            field: 'u_income'
          }  ,{
            title: '收支',
            width:90,
            field: 'u_inandout'
          }  ,{
            title: '操作',
            width:90,
            field: 'u_oper'
          }]
  })
  
     //学生代收款收入
  $('#StudentIncomeTable').bootstrapTable({
    columns:[{
            type: 'selection',
            width: 60,
            align: 'center',
          },{
            title: '收费编号',
            width:90,
            field: 'u_number'
          }  ,{
            title: '合同编号',
            width:90,
            field: 'u_contact_number'
          } ,{
            title: '留学国家',
            width:90,
            field: 'u_nation'
          }  ,{
            title: '学生姓名',
            width:90,
            field: 'u_name'
          }  ,{
            title: '咨询顾问',
            width:90,
            field: 'u_consult'
          }   ,{
            title: '学生来源',
            width:90,
            field: 'u_resource'
          } ,{
            title: '代收款收入',
            width:90,
            field: 'u_total_income'
          } ,{
            title: '创建人',
            width:90,
            field: 'u_creater'
          }  ,{
            title: '创建时间',
            width:90,
            field: 'u_create_date'
          }  ,{
            title: '操作',
            width:90,
            field: 'u_oper'
          }]
  })
  
      //学生代收款支出
  $('#StudentPayTable').bootstrapTable({
    columns:[{
            type: 'selection',
            width: 60,
            align: 'center',
          },{
            title: '收费编号',
            width:90,
            field: 'u_number'
          }  ,{
            title: '合同编号',
            width:90,
            field: 'u_contact_number'
          } ,{
            title: '留学国家',
            width:90,
            field: 'u_nation'
          }  ,{
            title: '学生姓名',
            width:90,
            field: 'u_name'
          }  ,{
            title: '咨询顾问',
            width:90,
            field: 'u_consult'
          }   ,{
            title: '学生来源',
            width:90,
            field: 'u_resource'
          } ,{
            title: '代收款收入',
            width:90,
            field: 'u_total_income'
          } ,{
            title: '创建人',
            width:90,
            field: 'u_creater'
          }  ,{
            title: '创建时间',
            width:90,
            field: 'u_create_date'
          }  ,{
            title: '操作',
            width:90,
            field: 'u_oper'
          }]
  })
  
   //学生代收款收支明细
  $('#StudentDetailTable').bootstrapTable({
    columns:[{
            type: 'selection',
            width: 60,
            align: 'center',
          },{
            title: '费用编号',
            width:90,
            field: 'u_number'
          }   ,{
            title: '学生姓名',
            width:90,
            field: 'u_name'
          }  ,{
            title: '咨询顾问',
            width:90,
            field: 'u_consult'
          }   ,{
            title: '下级代理',
            width:90,
            field: 'u_below'
          } ,{
            title: '费用类别',
            width:90,
            field: 'u_money_type'
          }  ,{
            title: '收入服务费',
            width:90,
            field: 'u_total_income'
          },{
            title: '创建人',
            width:90,
            field: 'u_creater'
          }  ,{
            title: '创建时间',
            width:90,
            field: 'u_create_date'
          }  ,{
            title: '操作',
            width:90,
            field: 'u_oper'
          }]
  })
  
   //财务总收支
  $('#FinanceTotal').bootstrapTable({
    columns:[{
            type: 'selection',
            width: 60,
            align: 'center',
          } ,{
            title: '合同编号',
            width:90,
            field: 'u_contact_web'
          } ,{
            title: '学生姓名',
            width:90,
            field: 'u_name'
          }  ,{
            title: '合同金额',
            width:90,
            field: 'u_contact_money'
          }  ,{
            title: '总缴费',
            width:90,
            field: 'u_total_oncome'
          }   ,{
            title: '总退费',
            width:90,
            field: 'u_total_withdraw'
          } ,{
            title: '总代收费',
            width:90,
            field: 'u_total_money'
          } ,{
            title: '佣金收入',
            width:90,
            field: 'u_income'
          }  ,{
            title: '收支',
            width:90,
            field: 'u_inandout'
          }  ,{
            title: '操作',
            width:90,
            field: 'u_oper'
          }]
  })
   //操作日志
  $('#OperationLogTable').bootstrapTable({
    columns:[{
            type: 'selection',
            width: 60,
            align: 'center',
          } ,{
            title: '合同编号',
            width:90,
            field: 'u_contact_number'
          } ,{
            title: '签约客户',
            width:90,
            field: 'u_name'
          }  ,{
            title: '咨询顾问',
            width:90,
            field: 'u_consult'
          }  ,{
            title: '合同类型',
            width:90,
            field: 'u_type'
          }   ,{
            title: '留学国家',
            width:90,
            field: 'u_nation'
          } ,{
            title: '变更项',
            width:90,
            field: 'u_update'
          } ,{
            title: '变更前',
            width:90,
            field: 'u_update_before'
          }  ,{
            title: '变更后',
            width:90,
            field: 'u_update_after'
          }   ,{
            title: '变更人',
            width:90,
            field: 'u_update_name'
          }   ,{
            title: '变更日期',
            width:90,
            field: 'u_update_date'
          }  ,{
            title: '操作',
            width:90,
            field: 'u_oper'
          }]
  })
   //用户账号
  $('#UserTable').bootstrapTable({
    columns:[{
            type: 'selection',
            width: 60,
            align: 'center',
          } ,{
            title: '账号',
            width:90,
            field: 'u_account'
          } ,{
            title: '密码',
            width:90,
            field: 'u_password'
          }  ,{
            title: '类别',
            width:90,
            field: 'u_type'
          }  ,{
            title: '是否启用',
            width:90,
            field: 'u_use'
          }   ,{
            title: '姓名',
            width:90,
            field: 'u_name'
          } ,{
            title: '电话',
            width:90,
            field: 'u_phone'
          } ,{
            title: '邮箱',
            width:90,
            field: 'u_email'
          }  ,{
            title: '微信',
            width:90,
            field: 'u_wechat'
          }   ,{
            title: '生日',
            width:90,
            field: 'u_birthday'
          }   ,{
            title: '所属分公司',
            width:90,
            field: 'u_branch_company'
          }    ,{
            title: '登陆次数',
            width:90,
            field: 'u_login_number'
          }   ,{
            title: '最后登录时间',
            width:90,
            field: 'u_last_time'
          }   ,{
            title: 'IP地址',
            width:90,
            field: 'u_ip'
          } ,{
            title: '操作',
            width:90,
            field: 'u_oper'
          }]
  })
})