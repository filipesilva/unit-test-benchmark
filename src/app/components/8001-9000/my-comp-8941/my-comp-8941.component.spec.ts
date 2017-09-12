import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8941Component } from './my-comp-8941.component';

describe('MyComp8941Component', () => {
  let component: MyComp8941Component;
  let fixture: ComponentFixture<MyComp8941Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8941Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8941Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
