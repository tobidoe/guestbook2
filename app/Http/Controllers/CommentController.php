<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{


//    store a freshly created comment in database
    public function store(Request $request)
    {
        auth()->user()->comments()->create($request->except('_token'));
        return redirect()->back();
    }


//update a specific comment in database
    public function update(Request $request, Comment $comment)
    {
        //check if the comment to update is users own comment
        if (auth()->id() != $comment->user->id) {
            return 'Du kannst nur deine eigenen Kommentare ändern';
        }

        //update comments body and update comment in database
        $comment->body = request('body');
        $comment->save();

        return redirect()->back();
    }

    //remove a specified comment with comments from storage
    public function destroy(Comment $comment)
    {

        $comment->delete();
        return redirect()->back();
    }
}
