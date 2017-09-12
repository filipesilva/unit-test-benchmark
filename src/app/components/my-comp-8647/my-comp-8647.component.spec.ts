import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8647Component } from './my-comp-8647.component';

describe('MyComp8647Component', () => {
  let component: MyComp8647Component;
  let fixture: ComponentFixture<MyComp8647Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8647Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8647Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
