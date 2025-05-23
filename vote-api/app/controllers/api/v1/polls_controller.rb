class Api::V1::PollsController < ApplicationController
  def index
    render json: Poll.all, include: :votes
  end

  def show
    poll = Poll.find(params[:id])
    render json: poll, include: :votes
  end

  def update
    poll = Poll.find(params[:id])
    
    poll.title = params[:title]
    
    if params[:options].present?
      poll.votes = params[:options].map do |option|
        poll.votes.find_or_initialize_by(option: option)
      end
    end
    
    if poll.save
      render json: poll, include: :votes
    else
      render json: { errors: poll.errors.full_messages }, status: :unprocessable_entity
    end
  end
end
