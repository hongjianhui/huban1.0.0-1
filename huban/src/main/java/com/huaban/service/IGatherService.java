package com.huaban.service;

import com.huaban.entity.Gather;

import java.util.List;
import java.util.Map;

public interface IGatherService {

    //查询所有图片
    List<Gather> selectimgAll(Map map);

    /**
     * 根据id查询采集类
     */
    Gather selectBygid(int gid);

    /**
     * 根据hid查询采集集合
     */
    List<Gather> selectByHid(Integer hid);

}
