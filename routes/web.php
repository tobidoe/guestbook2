<?php

use Illuminate\Support\Facades\Route;

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
Route::get('/', function () {
    return view('landingPage');
});


Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia\Inertia::render('Dashboard');
})->name('dashboard');

Route::get('test',function(){
    return view('test');
});


Route::middleware('auth')->group(function () {

    Route::resource('posts', App\Http\Controllers\PostController::class)->except([
        'create', 'show'
    ]);

    Route::resource('comments', App\Http\Controllers\CommentController::class)->only([
        'store', 'update', 'destroy'
    ]);
});
