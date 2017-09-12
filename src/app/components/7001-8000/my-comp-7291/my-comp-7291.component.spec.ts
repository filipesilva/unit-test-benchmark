import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7291Component } from './my-comp-7291.component';

describe('MyComp7291Component', () => {
  let component: MyComp7291Component;
  let fixture: ComponentFixture<MyComp7291Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7291Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7291Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
