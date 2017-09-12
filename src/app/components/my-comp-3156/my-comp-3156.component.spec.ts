import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3156Component } from './my-comp-3156.component';

describe('MyComp3156Component', () => {
  let component: MyComp3156Component;
  let fixture: ComponentFixture<MyComp3156Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3156Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3156Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
