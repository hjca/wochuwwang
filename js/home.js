<!-- 轮播图 -->
<script type="text/template" id="slideTemplate">
	<% for (var tempObj of slide) { %>
		<a href="###" class="swiper-slide">
			<!-- 利用<%= %> 进行输出变量 -->
			<img src="<%= tempObj.activity.img %>"/>
		</a>	
	<% } %>
</script>