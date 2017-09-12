import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8483Component } from './my-comp-8483.component';

describe('MyComp8483Component', () => {
  let component: MyComp8483Component;
  let fixture: ComponentFixture<MyComp8483Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8483Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8483Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
