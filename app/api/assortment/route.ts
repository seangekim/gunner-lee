// app/api/assortment/route.ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { AssortmentConfig } from '@/types/assortment';

// Get the path to the JSON file
const getFilePath = () => {
  return path.join(process.cwd(), 'public', 'data', 'assortment.json');
};

// GET: Read the current assortment configuration
export async function GET() {
  try {
    const filePath = getFilePath();
    const fileContents = await fs.promises.readFile(filePath, 'utf8');
    const data: AssortmentConfig = JSON.parse(fileContents);
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error reading assortment data:', error);
    return NextResponse.json(
      { error: 'Failed to read assortment data' },
      { status: 500 }
    );
  }
}

// POST: Update the assortment configuration
export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const data: AssortmentConfig = await request.json();
    
    // Validate the data structure
    if (!data.items || !Array.isArray(data.items)) {
      return NextResponse.json(
        { error: 'Invalid data structure' },
        { status: 400 }
      );
    }
    
    // Update the lastUpdated timestamp
    if (data.metadata) {
      data.metadata.lastUpdated = new Date().toISOString().split('T')[0];
    }
    
    // Write the updated data to the file
    const filePath = getFilePath();
    const jsonString = JSON.stringify(data, null, 2);
    await fs.promises.writeFile(filePath, jsonString, 'utf8');
    
    return NextResponse.json({ success: true, message: 'Data updated successfully' });
  } catch (error) {
    console.error('Error updating assortment data:', error);
    return NextResponse.json(
      { error: 'Failed to update assortment data' },
      { status: 500 }
    );
  }
}