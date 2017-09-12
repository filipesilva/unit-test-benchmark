import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5179Component } from './my-comp-5179.component';

describe('MyComp5179Component', () => {
  let component: MyComp5179Component;
  let fixture: ComponentFixture<MyComp5179Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5179Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5179Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
