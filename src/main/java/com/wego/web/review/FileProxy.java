package com.wego.web.review;

import java.io.File;
import java.util.UUID;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;


@Component
public class FileProxy  {
	public void fileupload(MultipartFile[] uploadFile) {
		System.out.println("파일 프록시");
        String uploadFolder = "C:\\Users\\user\\spring\\wegoprj\\wegoPRJ2\\src\\main\\webapp\\resources\\wegoimg\\reviewimg\\";
        System.out.println("파일 프록시2");
        File uploadPath = new File(uploadFolder);
        System.out.println("파일 프록시3");
        if(uploadPath.exists() ==false) {
        	uploadPath.mkdirs();
        }
        System.out.println("파일 프록시4");
        System.out.println(uploadFile.length);
        for(MultipartFile f : uploadFile) {
        	System.out.println("파일 프록시5");
            String fname = f.getOriginalFilename();
            System.out.println("파일 프록시"+fname);
            String extension = fname.substring(fname.lastIndexOf(".")+1);
            fname = fname.substring(fname.lastIndexOf("\\")+1,fname.lastIndexOf("."));
            UUID uuid = UUID.randomUUID();
            fname = fname+"-"+uuid.toString()+"."+extension;
            File saveFile = new File(uploadPath,fname);
            try {
                f.transferTo(saveFile);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
	}


	
	
}