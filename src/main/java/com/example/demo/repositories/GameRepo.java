package com.example.demo.repositories;

import com.example.demo.entities.Game;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface GameRepo extends CrudRepository<Game, Integer> { // Integer = type of id

    public Game findById(int id); // SELECT * FROM games WHERE id = ?
}
