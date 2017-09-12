import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4156Component } from './my-comp-4156.component';

describe('MyComp4156Component', () => {
  let component: MyComp4156Component;
  let fixture: ComponentFixture<MyComp4156Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4156Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4156Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
