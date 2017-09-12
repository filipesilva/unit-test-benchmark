import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8038Component } from './my-comp-8038.component';

describe('MyComp8038Component', () => {
  let component: MyComp8038Component;
  let fixture: ComponentFixture<MyComp8038Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8038Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8038Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
