import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8932Component } from './my-comp-8932.component';

describe('MyComp8932Component', () => {
  let component: MyComp8932Component;
  let fixture: ComponentFixture<MyComp8932Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8932Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8932Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
