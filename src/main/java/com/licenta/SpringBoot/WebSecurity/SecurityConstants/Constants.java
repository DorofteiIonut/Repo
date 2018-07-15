package com.licenta.SpringBoot.WebSecurity.SecurityConstants;

public class Constants {
	public static final String SECRET="TheSecret";
	public static final long EXPIRATION_TIME = 864_000_000L;
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization ";
}
