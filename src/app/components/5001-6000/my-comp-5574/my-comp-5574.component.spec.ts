import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5574Component } from './my-comp-5574.component';

describe('MyComp5574Component', () => {
  let component: MyComp5574Component;
  let fixture: ComponentFixture<MyComp5574Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5574Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5574Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
