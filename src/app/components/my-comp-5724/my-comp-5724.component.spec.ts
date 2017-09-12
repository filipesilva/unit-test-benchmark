import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5724Component } from './my-comp-5724.component';

describe('MyComp5724Component', () => {
  let component: MyComp5724Component;
  let fixture: ComponentFixture<MyComp5724Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5724Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5724Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
