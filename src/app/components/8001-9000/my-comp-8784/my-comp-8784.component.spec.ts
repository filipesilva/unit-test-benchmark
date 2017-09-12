import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8784Component } from './my-comp-8784.component';

describe('MyComp8784Component', () => {
  let component: MyComp8784Component;
  let fixture: ComponentFixture<MyComp8784Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8784Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8784Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
