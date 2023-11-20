package com.example.helloworld.entity.lecture;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "lecture_content")
public class LectureContentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int contentNo;
    @ManyToOne
    @JoinColumn(name = "partNo")
    private LecturePartEntity part;
    @ManyToOne
    @JoinColumn(name = "lectureNo")
    private LectureEntity lecture;
    private int orderNo;
    private String content;
}

