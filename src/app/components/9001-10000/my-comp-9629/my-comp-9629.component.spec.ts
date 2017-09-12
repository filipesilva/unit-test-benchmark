import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9629Component } from './my-comp-9629.component';

describe('MyComp9629Component', () => {
  let component: MyComp9629Component;
  let fixture: ComponentFixture<MyComp9629Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9629Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9629Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
