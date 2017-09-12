import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5277Component } from './my-comp-5277.component';

describe('MyComp5277Component', () => {
  let component: MyComp5277Component;
  let fixture: ComponentFixture<MyComp5277Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5277Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5277Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
