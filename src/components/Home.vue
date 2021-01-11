<template>
  <v-layout row wrap>
    <v-flex xs4>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">Batman vs Superman</div>
            <span class="grey--text">2016 ‧ Película de Ciencia Ficción/Acción ‧ 3h 3m</span>
          </div>
        </v-card-title>
        <v-card-text>
          Han pasado casi dos años desde que la batalla colosal de Superman (Henry Cavill) con Zod (Michael Shannon) devastó la ciudad de Metrópolis. La pérdida de vidas y los daños colaterales dejaron a muchos enojados e indefensos, incluido el multimillonario Bruce Wayne (Ben Affleck). Convencido de que Superman ahora es una amenaza para la humanidad, Batman se embarca en una venganza personal para poner fin a su reinado en la Tierra, mientras el intrigante Lex Luthor (Jesse Eisenberg) lanza su propia cruzada contra el Hombre de Acero.
        </v-card-text>
        <v-card-actions>
          <v-btn color="purple" text>Reseñar esta pelicula</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs4>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">Logan</div>
            <span class="grey--text">2017 ‧ Película Drama/Ciencia Ficción ‧ 2h 21m</span>
          </div>
        </v-card-title>
        <v-card-text>
          En un futuro cercano, un cansado Logan (Hugh Jackman) cuida de un enfermo Profesor X (Patrick Stewart) en un puesto remoto en la frontera mexicana. un joven protector Su plan para esconderse del mundo exterior se transforma cuando conoce a un mutante (Dafne Keen) que se parece mucho a él. Logan ahora debe ser la chica y luchar contra las fuerzas oscuras que quieren capturarla.
        </v-card-text>
        <v-card-actions>
          <v-btn color="purple" text>Reseñar esta pelicula</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs4>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">El Sorprendente Hombre Araña 2</div>
            <span class="grey--text">2014 ‧ Acción/Aventura ‧ 2h 22m</span>
          </div>
        </v-card-title>
        <v-card-text>
          La aparición de un nuevo y poderoso villano y el regreso de un viejo amigo provoca que Peter Parker crea que todos sus enemigos tienen una sola cosa en común: Oscorp.
        </v-card-text>
        <v-card-actions>
          <v-btn color="purple" text>Reseñar esta pelicula</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs4>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">Spider-Man: un nuevo universo</div>
            <span class="grey--text">2018 ‧ Animación/Acción ‧ 1h 56m</span>
          </div>
        </v-card-title>
        <v-card-text>
          Luego de ser mordido por una araña radioactiva, el joven Miles Morales desarrolla misteriosos poderes que lo transforman en el Hombre Araña. Ahora deberá usar sus nuevas habilidades ante el malvado Kingpin, un enorme demente que puede abrir portales hacia otros universos.
        </v-card-text>
        <v-card-actions>
          <v-btn color="purple" text>Reseñar esta pelicula</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs4>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">Avengers: Endgame</div>
            <span class="grey--text">2019 ‧ Acción/Ciencia ficción ‧ 3h 2m</span>
          </div>
        </v-card-title>
        <v-card-text>
          Los Vengadores restantes deben encontrar una manera de recuperar a sus aliados para un enfrentamiento épico con Thanos, el malvado que diezmó el planeta y el universo.
        </v-card-text>
        <v-card-actions>
          <v-btn color="purple" text>Reseñar esta pelicula</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data () {
    return {
      mensaje: 'Hola, cómo estás? tienes frio?'
    }
  },
  methods: {
    reply () {
      this.mensaje = 'Estoy muy bien, gracias'
    }
  }
}
</script>
