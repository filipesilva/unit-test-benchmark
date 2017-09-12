import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8451Component } from './my-comp-8451.component';

describe('MyComp8451Component', () => {
  let component: MyComp8451Component;
  let fixture: ComponentFixture<MyComp8451Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8451Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8451Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
