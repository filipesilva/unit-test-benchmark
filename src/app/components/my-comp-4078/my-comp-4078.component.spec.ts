import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4078Component } from './my-comp-4078.component';

describe('MyComp4078Component', () => {
  let component: MyComp4078Component;
  let fixture: ComponentFixture<MyComp4078Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4078Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4078Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
