import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5968Component } from './my-comp-5968.component';

describe('MyComp5968Component', () => {
  let component: MyComp5968Component;
  let fixture: ComponentFixture<MyComp5968Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5968Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5968Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
