// Les actions sont exécutées côté serveur
"use server";
 
import { NextResponse } from "next/server";
import { open } from "sqlite";
import sqlite3 from "sqlite3";
 
export async function GetProject(id: number) {
  let db = null;
 
  // Check if the database instance has been initialized
  if (!db) {
    // If the database instance is not initialized, open the database connection
    db = await open({
      filename: process.env.DATABASE_NAME || "./database.db", // Specify the database file path
      driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
    });
  }
 
  // Get one user by id
  const sql = `SELECT * FROM projets WHERE id = ?`;
  const projet = await db.get(sql, id);
 
  // If no result
  if (!projet) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
    
  }
 
  return NextResponse.json(projet);
}