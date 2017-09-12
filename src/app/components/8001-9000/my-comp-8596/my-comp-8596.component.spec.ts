import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8596Component } from './my-comp-8596.component';

describe('MyComp8596Component', () => {
  let component: MyComp8596Component;
  let fixture: ComponentFixture<MyComp8596Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8596Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8596Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
