import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8525Component } from './my-comp-8525.component';

describe('MyComp8525Component', () => {
  let component: MyComp8525Component;
  let fixture: ComponentFixture<MyComp8525Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8525Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8525Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
