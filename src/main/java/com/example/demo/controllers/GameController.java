package com.example.demo.controllers;

import com.example.demo.entities.Game;
import com.example.demo.services.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class GameController {

    // C.R.U.D

    @Autowired
    private GameService gameService;

    // R - @GetMapping
    @GetMapping("/rest/games")
    public List<Game> getAllGames() {
        return gameService.getAllGames();
    }

    @GetMapping("/rest/games/{id}")
    public Game getOneGame(@PathVariable int id) {
        return gameService.getOneGame(id);
    }

    // C - @PostMapping
    // @RequestBody converts from Json to specified Java class
    @PostMapping("/rest/games")
    public Game createNewGame(@RequestBody Game game) {
        return gameService.createGame(game);
    }

    // D - @DeleteMapping
    @DeleteMapping("/rest/games/{id}")
    public void deleteGame(@PathVariable int id) {
        gameService.deleteGame(id);
    }


    // U - @PutMapping
    /*@PutMapping("/rest/games/{id}")
    public Game updateGame(@RequestBody Game game, @PathVariable int id) {
        return gameService.updateGame(game, id);
    }*/
}
