import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7248Component } from './my-comp-7248.component';

describe('MyComp7248Component', () => {
  let component: MyComp7248Component;
  let fixture: ComponentFixture<MyComp7248Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7248Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7248Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
