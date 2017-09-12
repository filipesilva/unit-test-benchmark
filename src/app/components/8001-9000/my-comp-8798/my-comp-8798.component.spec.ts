import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8798Component } from './my-comp-8798.component';

describe('MyComp8798Component', () => {
  let component: MyComp8798Component;
  let fixture: ComponentFixture<MyComp8798Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8798Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8798Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
