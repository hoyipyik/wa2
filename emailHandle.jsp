<%@ page language="java" pageEncoding="UTF-8"%>
<%@ page import="java.net.URLDecoder" %>
<%
    //后端内容
    String content = request.getParameter("content"); //获取content参数中的值，其中含有中文
    String result = java.net.URLDecoder.decode(content, "UTF-8");  //content含有中文，需要执行解析。
    out.print("Your mail "+ result+"has been sent");  //返回浏览器信息
%>