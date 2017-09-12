import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7281Component } from './my-comp-7281.component';

describe('MyComp7281Component', () => {
  let component: MyComp7281Component;
  let fixture: ComponentFixture<MyComp7281Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7281Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7281Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
