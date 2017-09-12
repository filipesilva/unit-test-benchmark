import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8021Component } from './my-comp-8021.component';

describe('MyComp8021Component', () => {
  let component: MyComp8021Component;
  let fixture: ComponentFixture<MyComp8021Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8021Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
