import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5049Component } from './my-comp-5049.component';

describe('MyComp5049Component', () => {
  let component: MyComp5049Component;
  let fixture: ComponentFixture<MyComp5049Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5049Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5049Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
