package com.example.helloworld.transform.lecture;

import com.example.helloworld.dto.lecture.LectureDTO;
import com.example.helloworld.dto.member.MemberDTO;
import com.example.helloworld.entity.lecture.LectureEntity;
import com.example.helloworld.entity.member.MemberEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface LectureTransform {
    LectureEntity toEntity(LectureDTO dto);
    LectureDTO toDTO(LectureEntity entity);
}