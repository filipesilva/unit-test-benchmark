import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7078Component } from './my-comp-7078.component';

describe('MyComp7078Component', () => {
  let component: MyComp7078Component;
  let fixture: ComponentFixture<MyComp7078Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7078Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7078Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
