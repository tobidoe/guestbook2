<?php

namespace App\Http\Controllers;

use App\Http\Resources\AuthenticatedUser;
use App\Http\Resources\PostResource;
use App\Models\Post;
use App\Models\Comment;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
//    todo: create api ressource controller for comments?
    public function index()
    {
        //eager loading posts with users and with comments with users
        $posts = Post::with('user')
            ->with('comments', 'comments.user')
            ->orderBy('created_at', 'desc')
            ->get();

        $posts = PostResource::collection($posts);
        $authenticatedUser = new AuthenticatedUser(Auth::user());
        return Inertia::render('GuestbookPage',['posts' => $posts, 'authUser' => $authenticatedUser]);

    }


    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Post $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Post $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Post $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        //
    }


    //generates and stores 20 posts, each with 1 user and 0-6 comments
    public function generatePosts()
    {
        for ($i = 1; $i < 20; $i++) {
            $post_id = Post::factory()->create()->id;
            for ($j = 1; $j < rand(1, 7); $j++) {
                Comment::factory()->create(['post_id' => $post_id]);
            }
        }
    }
}
