<?php

use App\Http\Resources\AuthenticatedUserResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;
use App\Models\User;

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


//Landing Page
Route::get('/', 'App\Http\Controllers\PostController@index');


//Dashboard
Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia\Inertia::render('Dashboard');
})->name('dashboard');


//grouped middleware routes
//todo: look up when to use middleware auth, auth:sanctum and verified (and more?)
Route::middleware('auth')->group(function () {

    /*
    PostController resource:
    - POST /posts               -> PostController@store
    - PUT/PATCH /posts/{post}   -> PostController@update
    - DELETE /posts/{post}      -> PostController@destroy
    */
    Route::resource('posts', PostController::class)->except([
        'create', 'show', 'edit', 'index'
    ]);

    /*
    CommentController resource:
    - POST /comments               -> CommentController@store
    - PUT/PATCH /comments/{comment}   -> CommentController@update
    - DELETE /comments/{comment}      -> CommentController@destroy
    */
    Route::resource('comments', CommentController::class)->only([
        'store', 'update', 'destroy'
    ]);
});


//Userinfo Page
//comment: This should be in a dedicated Controller (user-controller)
Route::get('/user/{user_id}', function ($user_id) {

    //eager load user with posts and comments
    $user = User::where('id', $user_id)->with('posts')->with('comments')->firstOrFail();
    //use resource instead of model
    $user = new \App\Http\Resources\UserForUserInfoResource($user);
    //todo: do i really have to do this every time i use SiteHeader?
    //comment: No
    $authenticatedUser = null;
    if (Auth::check()) {
        $authenticatedUser = new AuthenticatedUserResource(Auth::user());
    }

    return Inertia\Inertia::render('UserInfoPage', ['user' => $user, 'authUser' => $authenticatedUser,]);
});
