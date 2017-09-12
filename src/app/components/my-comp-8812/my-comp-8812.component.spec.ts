import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8812Component } from './my-comp-8812.component';

describe('MyComp8812Component', () => {
  let component: MyComp8812Component;
  let fixture: ComponentFixture<MyComp8812Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8812Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8812Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
