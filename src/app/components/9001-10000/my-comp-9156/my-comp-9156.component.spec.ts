import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9156Component } from './my-comp-9156.component';

describe('MyComp9156Component', () => {
  let component: MyComp9156Component;
  let fixture: ComponentFixture<MyComp9156Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9156Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9156Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
