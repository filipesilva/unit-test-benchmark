import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5659Component } from './my-comp-5659.component';

describe('MyComp5659Component', () => {
  let component: MyComp5659Component;
  let fixture: ComponentFixture<MyComp5659Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5659Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5659Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
