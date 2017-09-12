import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3794Component } from './my-comp-3794.component';

describe('MyComp3794Component', () => {
  let component: MyComp3794Component;
  let fixture: ComponentFixture<MyComp3794Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3794Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3794Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
