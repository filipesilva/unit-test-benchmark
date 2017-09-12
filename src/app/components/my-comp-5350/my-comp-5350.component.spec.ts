import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5350Component } from './my-comp-5350.component';

describe('MyComp5350Component', () => {
  let component: MyComp5350Component;
  let fixture: ComponentFixture<MyComp5350Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5350Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5350Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
