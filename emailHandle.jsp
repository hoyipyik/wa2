<%@ page language="java" pageEncoding="UTF-8"%>
<%@ page import="java.net.URLDecoder" %>
<%
    String content = request.getParameter("content"); //获取content参数中的值，其中含有中文
    String result = java.net.URLDecoder.decode(content, "UTF-8");  //content含有中文，需要执行解析。
    out.print(result);  //返回浏览器信息
%>