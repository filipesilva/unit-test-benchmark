import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8597Component } from './my-comp-8597.component';

describe('MyComp8597Component', () => {
  let component: MyComp8597Component;
  let fixture: ComponentFixture<MyComp8597Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8597Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8597Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
