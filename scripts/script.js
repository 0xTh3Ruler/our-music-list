new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      currentList: 'salma', // 'abdelmalek' or 'salma'
      lists: {
        salma: [
          {
            name: "Butterflies",
            artist: "Sia",
            cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/4.jpg",
            source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/4.mp3",
            url: "https://www.youtube.com/watch?v=kYgGwWYOd9Y",
            favorited: false
          },
          {
            name: "Mekanın Sahibi",
            artist: "Norm Ender",
            cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
            source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/1.mp3",
            url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
            favorited: false
          },
          {
            name: "Everybody Knows",
            artist: "Leonard Cohen",
            cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/2.jpg",
            source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/2.mp3",
            url: "https://www.youtube.com/watch?v=Lin-a2lTelg",
            favorited: false
          },
          {
            name: "Extreme Ways",
            artist: "Moby",
            cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/3.jpg",
            source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/3.mp3",
            url: "https://www.youtube.com/watch?v=ICjyAe9S54c",
            favorited: false
          },
          {
            name: "The Final Victory",
            artist: "Haggard",
            cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/5.jpg",
            source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/5.mp3",
            url: "https://www.youtube.com/watch?v=0WlpALnQdN8",
            favorited: false
          },
          {
            name: "Genius ft. Sia, Diplo, Labrinth",
            artist: "LSD",
            cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/6.jpg",
            source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/6.mp3",
            url: "https://www.youtube.com/watch?v=HhoATZ1Imtw",
            favorited: false
          },
          {
            name: "The Comeback Kid",
            artist: "Lindi Ortega",
            cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/7.jpg",
            source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/7.mp3",
            url: "https://www.youtube.com/watch?v=me6aoX0wCV8",
            favorited: false
          },
          {
            name: "Overdose",
            artist: "Grandson",
            cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/8.jpg",
            source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/8.mp3",
            url: "https://www.youtube.com/watch?v=00-Rl3Jlx-o",
            favorited: false
          },
          {
            name: "Rag'n'Bone Man",
            artist: "Human",
            cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
            source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3",
            url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
            favorited: false
          }
        ],
        abdelmalek: [
          {
            name: "ELON MUSK (Singularity)",
            artist: "Bad History",
            cover: "https://i1.sndcdn.com/artworks-UVt5Imj3hbZyk5rn-MiuXaA-t500x500.jpg",
            source: "https://audio.jukehost.co.uk/rhrCreWWbxHLgbLC0ZGxlVIn6i6utrMY",
            url: "https://youtu.be/dDakzFJfZ4c?si=fKIoetk-K6XfMepk",
            favorited: false
          },
          {
            name: "Bling-Bang-Bang-Born",
            artist: "Creepy Nuts",
            cover: "https://upload.wikimedia.org/wikipedia/en/d/d2/Creepy_Nuts_-_Bling-Bang-Bang-Born.png",
            source: "https://audio.jukehost.co.uk/9JaSSKt0MLARs4Jly2AphnZ5FXa2uogy",
            url: "https://youtu.be/pXRviuL6vMY?si=dr9Tl2ofgcJpspGy",
            favorited: false
          },
          {
            name: "Praise The Lord",
            artist: "A$AP Rocky",
            cover: "https://upload.wikimedia.org/wikipedia/en/b/b3/Praise_The_Lord_Da_Shine.jpeg",
            source: "https://audio.jukehost.co.uk/V6hTeo6JdDTOI1SDOvng37pukL6lalVM",
            url: "https://youtu.be/_eDpH4hMW1o?si=2ifHYmJGvPo7iaUI",
            favorited: false
          },
          {
            name: "GENERATION TIK TOK",
            artist: "DON BIGG",
            cover: "https://i.scdn.co/image/ab67616d0000b27333e123d3b37bd5a7418a3ba7",
            source: "https://audio.jukehost.co.uk/JMipWcyJiiLhXheCuzaTpz3NH2t2OqLr",
            url: "https://youtu.be/ec4zz-Imunk?si=IgwS6jiMhLH6iI8W",
            favorited: false
          },
          {
            name: "Bury the Light",
            artist: "Casey Edwards, Victor Borba",
            cover: "https://i.redd.it/cp9ldkh5jbu51.png",
            source: "https://audio.jukehost.co.uk/OfRKRqtoi9VW8UmWK6KKXiMWyFSmYvPz",
            url: "https://youtu.be/Jrg9KxGNeJY?si=VsJg_Mw8RyrwcH2x",
            favorited: false
          },
          {
            name: "Jnouni",
            artist: "Hoba Hoba Spirit",
            cover: "https://i.scdn.co/image/ab67616d00001e02816b6c8982df9fb4911f59d3",
            source: "https://audio.jukehost.co.uk/g9tvZrx7v8gykcA3921NXmtKEj7ByWAp",
            url: "https://youtu.be/FaXZKsHKXKo?si=jJodMignviUHBp1s",
            favorited: false
          },
          {
            name: "Fils de joie",
            artist: "Stromae",
            cover: "https://i1.sndcdn.com/artworks-4yPWUC4aXrCx-0-t500x500.jpg",
            source: "https://audio.jukehost.co.uk/RIWO4cMzj5O6st3ZVCT5Zdq4mwn4vqtB",
            url: "https://www.youtube.com/watch?v=M7Z2tgJo8Hg",
            favorited: false
          },
          {
            name: "Pas vraiment",
            artist: "Stromae",
            cover: "https://i1.sndcdn.com/artworks-4yPWUC4aXrCx-0-t500x500.jpg",
            source: "https://audio.jukehost.co.uk/2ASXYQmewcs6xIef2McXoUJACLShs7U9",
            url: "https://youtu.be/kk7vISDvJcY?si=9365Wl7KgFVry5wS",
            favorited: false
          },
          {
            name: "Tu vas me manquer",
            artist: "Maître Gims",
            cover: "https://i.scdn.co/image/ab67616d0000b273a5f00deff9a75e229b7936be",
            source: "https://audio.jukehost.co.uk/2iaaReZrgzdW0o6QDXnoyjWw1XNkUEyU",
            url: "https://www.youtube.com/watch?v=KA3Q1duzwaE",
            favorited: false
          }
        ]
      },
      tracks: [], // This will hold the currently selected list
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  computed: {
    playlistName() {
      return this.currentList == 'abdelmalek' ? "Abdelmalek's Playlist" : "Salma's Playlist";
    },
    currentTrack() {
      return this.tracks[this.currentTrackIndex];
    },
    currentBackground() {
      if (this.currentTrack) {
        return this.currentTrack.cover;
      }
      return ''; // Fallback background if no track
    }
  },
  methods: {

    switchList(list) {
      this.selectedList = list;
      this.currentList = list;
      // Update the tracks based on the selected list
      // You might want to define `lists` object to store different playlists
      if (this.lists[list]) {
        this.tracks = this.lists[list];
        this.currentTrackIndex = 0;
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.resetPlayer();
      }
    },   
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      const progress = this.$refs.progress;
      const rect = progress.getBoundingClientRect(); // Get the position of the progress bar
      const position = x - rect.left; // Calculate the position relative to the progress bar
      const maxduration = this.audio.duration;
      let percentage = (100 * position) / progress.offsetWidth;
      
      // Clamp percentage between 0 and 100
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      
      // Play or pause the audio based on your current logic
      if (this.isTimerPlaying) {
        this.audio.play();
      }
    },
    
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.clientX); // Use clientX instead of pageX
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
      this.scrollToCurrentTrack();
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      }
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
      this.scrollToCurrentTrack();
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      }
    },
    selectTrack(trackName) {
      const selectedTrackIndex = this.tracks.findIndex(track => track.name === trackName);
      if (selectedTrackIndex !== -1) {
        this.currentTrackIndex = selectedTrackIndex;
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.resetPlayer();
        this.scrollToCurrentTrack();
        if (this.audio.paused) {
          this.audio.play();
          this.isTimerPlaying = true;
        }
      }
    },
    isTrackSelected(trackName) {
      return this.currentTrack && this.currentTrack.name === trackName;
    },
    scrollToCurrentTrack() {
      this.$nextTick(() => {
        const musicListContainer = this.$el.querySelector('.music_list');
        const selectedTrack = musicListContainer.querySelector('.selected');
        
        if (selectedTrack) {
          // Calculate the offset to center the selected track
          const offsetTop = selectedTrack.offsetTop - (musicListContainer.clientHeight / 2) + (selectedTrack.clientHeight / 2);
          musicListContainer.scrollTop = offsetTop;
        }
      });
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
  
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
        this.setBackgroundFromCover();  // Set the background based on the current cover
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[ this.currentTrackIndex ].favorited;
    }
  },
  created() {
    let vm = this;
    this.tracks = this.lists[this.currentList];
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };
  
    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image";
      document.head.appendChild(link);
    }
  }
  
});
