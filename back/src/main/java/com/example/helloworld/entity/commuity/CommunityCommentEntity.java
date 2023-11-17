package com.example.helloworld.entity.commuity;

import com.example.helloworld.entity.member.MemberEntity;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.lang.Nullable;

import java.time.LocalDateTime;

@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "community_comment")
public class CommunityCommentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int commentNo;
    @ManyToOne
    @JoinColumn(name = "communityNo")
    private CommunityEntity community;
    @ManyToOne
    @JoinColumn(name = "memberUid")
    private MemberEntity member;
    @Nullable
    private Integer parentNo;
    private String content;
    private LocalDateTime regDate;
    private int isDeleted;
}
