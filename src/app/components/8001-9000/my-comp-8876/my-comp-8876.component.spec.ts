import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8876Component } from './my-comp-8876.component';

describe('MyComp8876Component', () => {
  let component: MyComp8876Component;
  let fixture: ComponentFixture<MyComp8876Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8876Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8876Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
