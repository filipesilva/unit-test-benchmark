import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8256Component } from './my-comp-8256.component';

describe('MyComp8256Component', () => {
  let component: MyComp8256Component;
  let fixture: ComponentFixture<MyComp8256Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8256Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8256Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
