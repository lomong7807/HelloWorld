package com.example.helloworld.dto;

import com.example.helloworld.dto.commuity.CommunityCommentDTO;
import com.example.helloworld.dto.commuity.CommunityDTO;
import com.example.helloworld.dto.commuity.CommunityHasTagDTO;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
public class PageResponseDTO {

    private List<CommunityDTO> communityList;
    private CommunityDTO view;
    private List<CommunityCommentDTO> commentsList;
    private List<CommunityHasTagDTO> hasTagsList;
    private String sort;
    private int prevNo;
    private int nextNo;


    private int pg;
    private int size;
    private int total;

    private int start, end, last;
    private boolean prev, next;
    // 1~ 10 페이지 설정
    @Builder.Default
    private int pageSize =10;

    @Builder
    public PageResponseDTO(PageRequestDTO pageRequestDTO,
                           List<CommunityDTO> communityList,
                           CommunityDTO view,
                           List<CommunityCommentDTO> commentsList,
                           List<CommunityHasTagDTO> hasTagsList,
                           String sort,
                           int prevNo,
                           int nextNo,
                           int total) {
        this.pg = pageRequestDTO.getPg();
        this.size = pageRequestDTO.getSize();
        this.communityList = communityList;
        this.view = view;
        this.commentsList = commentsList;
        this.hasTagsList = hasTagsList;
        this.sort = sort;
        this.prevNo = prevNo;
        this.nextNo = nextNo;

        this.end = (int) (Math.ceil(this.pg / (float)pageSize)) * pageSize;
        this.start = this.end - pageSize+1;


        this.last = (int) (Math.ceil(total / (double) size));
        this.end = end > last ? last : end;
        this.prev = this.start > 1;
        this.next = total > this.end * this.size;
    }
}
