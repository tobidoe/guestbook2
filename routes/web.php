<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


//root
Route::get('/','App\Http\Controllers\PostController@index');



Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia\Inertia::render('Dashboard');
})->name('dashboard');

Route::get('test',function(){
    return view('test');
});


Route::middleware('auth')->group(function () {

    Route::resource('posts', PostController::class)->except([
        'create', 'show'
    ]);

    Route::resource('comments', CommentController::class)->only([
        'store', 'update', 'destroy'
    ]);
});
