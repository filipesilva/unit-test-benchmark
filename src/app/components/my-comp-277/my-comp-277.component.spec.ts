import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp277Component } from './my-comp-277.component';

describe('MyComp277Component', () => {
  let component: MyComp277Component;
  let fixture: ComponentFixture<MyComp277Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp277Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp277Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
