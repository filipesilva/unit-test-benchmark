import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2732Component } from './my-comp-2732.component';

describe('MyComp2732Component', () => {
  let component: MyComp2732Component;
  let fixture: ComponentFixture<MyComp2732Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2732Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2732Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
