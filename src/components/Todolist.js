import React from 'react';

export default function Todolist() {
    const todos = [
    {
      "id": Date.now(),
      "value": "Buy milk",
      "done": false
    },
    {
      "id": Date.now()+1,
      "value": "Play with doge",
      "done": true  
    }
  ]
  return (
    <div>
      <div className="hero is-info">
        <div className="hero-body has-text-centered">
          <p className="title is-1">Todos</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          Todos will show up here later
        </div>
      </section>
    </div>
  )
}