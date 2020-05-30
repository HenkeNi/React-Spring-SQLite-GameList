package com.example.demo.entities;

import javax.persistence.*;

@Entity
@Table(name = "games")
public class Game {

    @Id // Primary Key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Enables Autoincrement
    private int id;

    private String title;
    private String content;
    private Long published;

    public void setId(int id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setPublished(Long published) {
        this.published = published;
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getContent() {
        return content;
    }

    public Long getPublished() {
        return published;
    }

    public Game() {}
}


