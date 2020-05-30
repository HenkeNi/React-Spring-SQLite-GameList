package com.example.demo.services;

import com.example.demo.entities.Game;
import com.example.demo.repositories.GameRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GameService {

    @Autowired
    private GameRepo gameRepo;

    public Game getOneGame(int id) {
        return gameRepo.findById(id);
    }

    public List<Game> getAllGames() {
        return (List<Game>) gameRepo.findAll();
    }

    public Game createGame(Game game) {
        return gameRepo.save(game);
    }

    public void deleteGame(int id) {
        gameRepo.deleteById(id);
    }

    /*public Game updateGame(Game game, int id) {
        Game originalGame = gameRepo.findById(id);
        originalGame.setTitle(game.getTitle());
        originalGame.setContent(game.getContent());
        originalGame.setPublished(game.getPublished());
        return gameRepo.save(originalGame);
    }*/

}
