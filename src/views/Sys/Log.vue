<template>
  <div class="container" style="width:99%;margin-top:-25px;">
	<!--工具栏-->
	<div class="toolbar" style="float:left;padding-top:10px;padding-left:15px;">
		<el-form :inline="true" :model="filters" :size="size">
			<el-form-item>
				<el-input v-model="filters.name" placeholder="用户名"></el-input>
			</el-form-item>
			<el-form-item>
				<kt-button label="查询" perms="sys:log:view" type="primary" @click="findPage(null)"/>
			</el-form-item>
		</el-form>
	</div>
	<!--表格内容栏-->
	<kt-table
    :data="pageResult" :columns="columns" :showOperation="showOperation" @findPage="findPage">
	</kt-table>
  </div>
</template>

<script>
import KtTable from "@/views/Core/KtTable"
import KtButton from "@/views/Core/KtButton"
export default {
	components: {
		KtTable,
		KtButton
	},
	data() {
		return {
			size: 'small',
			filters: {
				name: ''
			},
			columns: [
				{prop:"id", label:"ID", minWidth:60},
				{prop:"userName", label:"用户名", minWidth:100},
				// {prop:"operation", label:"操作", minWidth:120},
				{prop:"method", label:"方法", minWidth:180},
				{prop:"params", label:"参数", minWidth:220},
				{prop:"ip", label:"IP", minWidth:120},
				{prop:"time", label:"耗时", minWidth:80},
				{prop:"createBy", label:"创建人", minWidth:100},
				{prop:"createTime", label:"创建时间", minWidth:120}
				// {prop:"lastUpdateBy", label:"更新人", minWidth:100},
				// {prop:"lastUpdateTime", label:"更新时间", minWidth:120}
			],
			pageRequest: { pageNum: 1, pageSize: 8 },
      pageResult: {},
      showOperation:false
		}
	},
	methods: {
		// 获取分页数据
		findPage: function (data) {
			if(data !== null) {
				this.pageRequest = data.pageRequest
			}
			this.pageRequest.columnFilters = {userName: {name:'userName', value:this.filters.name}}
			this.$api.log.findPage(this.pageRequest).then((res) => {
				this.pageResult = res.data
			}).then(data.callback)
		}
	},
	mounted() {
	}
}
</script>

<style scoped>

</style>