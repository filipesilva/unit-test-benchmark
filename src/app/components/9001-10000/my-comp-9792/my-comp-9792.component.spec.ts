import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9792Component } from './my-comp-9792.component';

describe('MyComp9792Component', () => {
  let component: MyComp9792Component;
  let fixture: ComponentFixture<MyComp9792Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9792Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9792Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
