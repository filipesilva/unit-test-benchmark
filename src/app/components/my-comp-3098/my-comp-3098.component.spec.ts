import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3098Component } from './my-comp-3098.component';

describe('MyComp3098Component', () => {
  let component: MyComp3098Component;
  let fixture: ComponentFixture<MyComp3098Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3098Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3098Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
