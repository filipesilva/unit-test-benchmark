import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9308Component } from './my-comp-9308.component';

describe('MyComp9308Component', () => {
  let component: MyComp9308Component;
  let fixture: ComponentFixture<MyComp9308Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9308Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9308Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
