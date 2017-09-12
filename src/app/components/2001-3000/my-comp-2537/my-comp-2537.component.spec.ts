import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2537Component } from './my-comp-2537.component';

describe('MyComp2537Component', () => {
  let component: MyComp2537Component;
  let fixture: ComponentFixture<MyComp2537Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2537Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2537Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
