package com.example.helloworld.entity.lecture;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "lecture_level")
public class LectureLevelEntity {
    @Id
    private int levelNo;
    private String levelName;
}
