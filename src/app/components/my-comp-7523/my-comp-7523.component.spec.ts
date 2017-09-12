import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7523Component } from './my-comp-7523.component';

describe('MyComp7523Component', () => {
  let component: MyComp7523Component;
  let fixture: ComponentFixture<MyComp7523Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7523Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7523Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
