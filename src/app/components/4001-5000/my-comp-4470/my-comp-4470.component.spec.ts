import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4470Component } from './my-comp-4470.component';

describe('MyComp4470Component', () => {
  let component: MyComp4470Component;
  let fixture: ComponentFixture<MyComp4470Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4470Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4470Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
