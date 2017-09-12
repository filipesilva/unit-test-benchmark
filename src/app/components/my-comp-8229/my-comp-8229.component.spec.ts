import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8229Component } from './my-comp-8229.component';

describe('MyComp8229Component', () => {
  let component: MyComp8229Component;
  let fixture: ComponentFixture<MyComp8229Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8229Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8229Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
