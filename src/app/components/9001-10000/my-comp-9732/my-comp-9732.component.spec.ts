import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9732Component } from './my-comp-9732.component';

describe('MyComp9732Component', () => {
  let component: MyComp9732Component;
  let fixture: ComponentFixture<MyComp9732Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9732Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9732Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
