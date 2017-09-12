import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3506Component } from './my-comp-3506.component';

describe('MyComp3506Component', () => {
  let component: MyComp3506Component;
  let fixture: ComponentFixture<MyComp3506Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3506Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3506Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
