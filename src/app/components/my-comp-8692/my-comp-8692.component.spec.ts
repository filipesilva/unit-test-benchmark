import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8692Component } from './my-comp-8692.component';

describe('MyComp8692Component', () => {
  let component: MyComp8692Component;
  let fixture: ComponentFixture<MyComp8692Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8692Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8692Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
