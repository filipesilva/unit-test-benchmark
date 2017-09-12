import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9052Component } from './my-comp-9052.component';

describe('MyComp9052Component', () => {
  let component: MyComp9052Component;
  let fixture: ComponentFixture<MyComp9052Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9052Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9052Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
