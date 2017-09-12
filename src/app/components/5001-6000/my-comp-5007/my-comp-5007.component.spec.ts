import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5007Component } from './my-comp-5007.component';

describe('MyComp5007Component', () => {
  let component: MyComp5007Component;
  let fixture: ComponentFixture<MyComp5007Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5007Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5007Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
