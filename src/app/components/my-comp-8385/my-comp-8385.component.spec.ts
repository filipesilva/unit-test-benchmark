import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8385Component } from './my-comp-8385.component';

describe('MyComp8385Component', () => {
  let component: MyComp8385Component;
  let fixture: ComponentFixture<MyComp8385Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8385Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8385Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
