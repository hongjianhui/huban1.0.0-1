package com.entity;

public class Service {
    private Integer fseId;

    private String fseName;

    private String fseImg;

    private String fseFtime;

    private String fseUrgent;

    private Integer fsePrice;

    private Integer fseUrgentPrice;

    private String fsePriceunit;

    private Integer fseCount;

    private Integer fseStar;

    private Integer fdId;

    private Integer fsId;

    private String fseText;

    public Integer getFseId() {
        return fseId;
    }

    public void setFseId(Integer fseId) {
        this.fseId = fseId;
    }

    public String getFseName() {
        return fseName;
    }

    public void setFseName(String fseName) {
        this.fseName = fseName == null ? null : fseName.trim();
    }

    public String getFseImg() {
        return fseImg;
    }

    public void setFseImg(String fseImg) {
        this.fseImg = fseImg == null ? null : fseImg.trim();
    }

    public String getFseFtime() {
        return fseFtime;
    }

    public void setFseFtime(String fseFtime) {
        this.fseFtime = fseFtime == null ? null : fseFtime.trim();
    }

    public String getFseUrgent() {
        return fseUrgent;
    }

    public void setFseUrgent(String fseUrgent) {
        this.fseUrgent = fseUrgent == null ? null : fseUrgent.trim();
    }

    public Integer getFsePrice() {
        return fsePrice;
    }

    public void setFsePrice(Integer fsePrice) {
        this.fsePrice = fsePrice;
    }

    public Integer getFseUrgentPrice() {
        return fseUrgentPrice;
    }

    public void setFseUrgentPrice(Integer fseUrgentPrice) {
        this.fseUrgentPrice = fseUrgentPrice;
    }

    public String getFsePriceunit() {
        return fsePriceunit;
    }

    public void setFsePriceunit(String fsePriceunit) {
        this.fsePriceunit = fsePriceunit == null ? null : fsePriceunit.trim();
    }

    public Integer getFseCount() {
        return fseCount;
    }

    public void setFseCount(Integer fseCount) {
        this.fseCount = fseCount;
    }

    public Integer getFseStar() {
        return fseStar;
    }

    public void setFseStar(Integer fseStar) {
        this.fseStar = fseStar;
    }

    public Integer getFdId() {
        return fdId;
    }

    public void setFdId(Integer fdId) {
        this.fdId = fdId;
    }

    public Integer getFsId() {
        return fsId;
    }

    public void setFsId(Integer fsId) {
        this.fsId = fsId;
    }

    public String getFseText() {
        return fseText;
    }

    public void setFseText(String fseText) {
        this.fseText = fseText == null ? null : fseText.trim();
    }
}