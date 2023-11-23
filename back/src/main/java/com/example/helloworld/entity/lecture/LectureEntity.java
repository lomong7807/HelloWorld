package com.example.helloworld.entity.lecture;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.relational.core.sql.In;

import java.time.LocalDateTime;
import java.util.List;

@Data
@ToString(exclude = "hasTags") // 순환 참조를 방지하기 위해 hasTags는 toString에서 제외
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "lecture")
public class LectureEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int lectureNo;
    private String seller;
    private String title;
    @Column(columnDefinition = "int default 0")
    private int score;
    @ManyToOne
    @JoinColumn(name = "levelNo")
    private LectureLevelEntity level;
    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "thumbURL")
    private LectureThumbEntity thumb;
    private int price;
    @Column(columnDefinition = "int default 0")
    private int studyDate;
    @Column(columnDefinition = "int default 0")
    private int discount;

    @CreationTimestamp
    private LocalDateTime regDate;
    private String regIp;
    @Column(columnDefinition = "boolean default false")
    private Boolean isDelete;
    private String content;
    @Column(columnDefinition = "int default 0")
    private int hit;
    @Column(columnDefinition = "int default 0")
    private int review;
    @Column(columnDefinition = "int default 0")
    private int sold;
    @OneToMany(mappedBy = "lecture", cascade = CascadeType.ALL)
    private List<LectureHasTagEntity> hasTags;
    @PrePersist
    public void prePersist() {
        // null인 필드에 대해 디폴트 값을 설정
        if (isDelete == null) {
            isDelete = false; // 또는 원하는 디폴트 값으로 설정
        }
        // 필요한 다른 로직들...
    }
}
