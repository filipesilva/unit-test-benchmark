import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9892Component } from './my-comp-9892.component';

describe('MyComp9892Component', () => {
  let component: MyComp9892Component;
  let fixture: ComponentFixture<MyComp9892Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9892Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9892Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
