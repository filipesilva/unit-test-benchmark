import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8203Component } from './my-comp-8203.component';

describe('MyComp8203Component', () => {
  let component: MyComp8203Component;
  let fixture: ComponentFixture<MyComp8203Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8203Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8203Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
