import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2947Component } from './my-comp-2947.component';

describe('MyComp2947Component', () => {
  let component: MyComp2947Component;
  let fixture: ComponentFixture<MyComp2947Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2947Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2947Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
