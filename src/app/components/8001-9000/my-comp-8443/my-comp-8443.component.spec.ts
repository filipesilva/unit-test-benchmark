import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8443Component } from './my-comp-8443.component';

describe('MyComp8443Component', () => {
  let component: MyComp8443Component;
  let fixture: ComponentFixture<MyComp8443Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8443Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8443Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
