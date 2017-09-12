import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8918Component } from './my-comp-8918.component';

describe('MyComp8918Component', () => {
  let component: MyComp8918Component;
  let fixture: ComponentFixture<MyComp8918Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8918Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8918Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
