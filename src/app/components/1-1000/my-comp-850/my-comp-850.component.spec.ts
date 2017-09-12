import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp850Component } from './my-comp-850.component';

describe('MyComp850Component', () => {
  let component: MyComp850Component;
  let fixture: ComponentFixture<MyComp850Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp850Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp850Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
