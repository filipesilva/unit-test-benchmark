import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9550Component } from './my-comp-9550.component';

describe('MyComp9550Component', () => {
  let component: MyComp9550Component;
  let fixture: ComponentFixture<MyComp9550Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9550Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9550Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
