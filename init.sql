CREATE TABLE IF NOT EXISTS # (
   
    Id Integer PRIMARY KEY,
    data_partida timestamp not null,
    selecao_mandante varchar(30) not null,
    selecao_visitante varchar(30) not null,
    gol_mandante Integer not null,
    gol_visitante Integer not null
 
);
