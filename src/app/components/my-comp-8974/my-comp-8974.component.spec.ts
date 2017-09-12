import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8974Component } from './my-comp-8974.component';

describe('MyComp8974Component', () => {
  let component: MyComp8974Component;
  let fixture: ComponentFixture<MyComp8974Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8974Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8974Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
