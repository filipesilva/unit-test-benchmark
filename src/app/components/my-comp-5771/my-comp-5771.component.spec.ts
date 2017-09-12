import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5771Component } from './my-comp-5771.component';

describe('MyComp5771Component', () => {
  let component: MyComp5771Component;
  let fixture: ComponentFixture<MyComp5771Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5771Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5771Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
