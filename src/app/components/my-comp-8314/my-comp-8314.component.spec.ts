import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8314Component } from './my-comp-8314.component';

describe('MyComp8314Component', () => {
  let component: MyComp8314Component;
  let fixture: ComponentFixture<MyComp8314Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8314Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8314Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
