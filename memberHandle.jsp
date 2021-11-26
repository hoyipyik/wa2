<%@ page language="java" pageEncoding="UTF-8"%>
<%@ page import="java.net.URLDecoder" %>
<%
    String name =request.getParameter("name"); //获取content参数中的值，其中含有中文。
    name = java.net.URLDecoder.decode(name, "UTF-8"); 
    String username =request.getParameter("username"); //获取content参数中的值，其中含有中文。
    username = java.net.URLDecoder.decode(username, "UTF-8");
    
    out.println(name+username)
%>

