import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8515Component } from './my-comp-8515.component';

describe('MyComp8515Component', () => {
  let component: MyComp8515Component;
  let fixture: ComponentFixture<MyComp8515Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8515Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8515Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
