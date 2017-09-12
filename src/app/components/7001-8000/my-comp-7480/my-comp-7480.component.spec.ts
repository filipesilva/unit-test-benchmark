import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7480Component } from './my-comp-7480.component';

describe('MyComp7480Component', () => {
  let component: MyComp7480Component;
  let fixture: ComponentFixture<MyComp7480Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7480Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7480Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
