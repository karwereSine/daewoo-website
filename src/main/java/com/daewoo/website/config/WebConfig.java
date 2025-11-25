package com.daewoo.website.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.nio.file.Paths;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // 서버의 정적 파일 디렉토리 경로
        String staticDir = "/opt/applications/daewoo-website/static";
        
        // 로컬 개발 환경을 위한 현재 프로젝트 루트 경로
        String projectRoot = Paths.get("").toAbsolutePath().toString();
        
        registry.addResourceHandler("/**")
                .addResourceLocations(
                    "classpath:/static/",
                    "file:" + staticDir + "/",
                    "file:" + projectRoot + "/",
                    "file:" + projectRoot + "/css/",
                    "file:" + projectRoot + "/js/",
                    "file:" + projectRoot + "/img/",
                    "file:" + projectRoot + "/data/",
                    "file:" + projectRoot + "/news/"
                );
    }
}

