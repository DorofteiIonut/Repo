package com.licenta.SpringBoot.WebSecurity;

import java.io.IOException;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.time.temporal.ChronoUnit;
import java.util.Date;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.licenta.SpringBoot.WebSecurity.SecurityConstants.Constants;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter{
	
	private AuthenticationManager authenticationManager;

	public JWTAuthenticationFilter(AuthenticationManager authenticationManager) {
		this.authenticationManager = authenticationManager;
	}

	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws AuthenticationException {
		
		try {
		User user=new ObjectMapper().readValue(request.getInputStream(),User.class);
		System.out.println("################## "+request.toString());

		return authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
		}catch (Exception e) {
			System.out.println("Invalid Credentials");
			throw new RuntimeException("Wrong Credentials");
		}
	}	

	@Override
	protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
			Authentication authResult) throws IOException, ServletException {
		ZonedDateTime expirationTime=ZonedDateTime.now(ZoneOffset.UTC).plus(Constants.EXPIRATION_TIME,ChronoUnit.MILLIS);
		String token=Jwts.builder().setSubject(((User)authResult.getPrincipal()).getUsername())
				.setExpiration(Date.from(expirationTime.toInstant())).signWith(SignatureAlgorithm.HS256,Constants.SECRET)
				.compact();
		response.getWriter().write(token);
		response.addHeader(Constants.HEADER_STRING,Constants.TOKEN_PREFIX+token);
	}
}
