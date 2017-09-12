import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5744Component } from './my-comp-5744.component';

describe('MyComp5744Component', () => {
  let component: MyComp5744Component;
  let fixture: ComponentFixture<MyComp5744Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5744Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5744Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
