<?php

namespace App\Http\Controllers;

use App\Http\Resources\AuthenticatedUserResource;
use App\Http\Resources\PostResource;
use App\Models\Post;
use App\Models\Comment;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{

    //return main page
    //    todo: create api resource controller for comments (lookup api resource routes)?
    public function index()
    {
        //eager load posts with users and with comments with users
        $posts = Post::with('user')
            ->with('comments', 'comments.user')
            ->orderBy('created_at', 'desc')
            ->get();

        //use resources instead of Eloquent models
        $posts = PostResource::collection($posts);
        //todo: Is there a nicer solution (perhaps with exception handling in AuthenticatedUserResource)?
        $authenticatedUser = null;
        if (Auth::check()) {
            $authenticatedUser = new AuthenticatedUserResource(Auth::user());
        }

        return Inertia::render('GuestbookPage',
            [
                'posts' => $posts,
                'authUser' => $authenticatedUser,
                'csrfToken' => csrf_token(),
            ]);
    }


    //store a freshly created post in database
    public function store(Request $request)
    {
        auth()->user()->posts()->create($request->except('_token'));
        return redirect()->back();
    }



    //update a specific post in database
    //todo: why does 'function update(..., Post $post)' work (learn about dependency injection)?
    public function update(Request $request, Post $post)
    {
        //check if the post to update is users own post
        if (auth()->id() != $post->user->id) {
            return 'Du kannst nur deine eigenen Posts ändern';
        }

        //update posts body and update post in database
        $post->body = request('body');
        $post->save();

        return redirect()->back();
    }

    //remove a specified post with comments from storage
    public function destroy(Post $post)
    {
        //delete to post attached comments
        //todo: is there a more straight forward way to remove foreign key constraints?
        foreach ($post->comments as $comment) {
            $comment->delete();
        }

        $post->delete();
        return redirect()->back();
    }



}
