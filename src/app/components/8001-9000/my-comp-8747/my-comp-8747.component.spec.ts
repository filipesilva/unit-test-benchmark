import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8747Component } from './my-comp-8747.component';

describe('MyComp8747Component', () => {
  let component: MyComp8747Component;
  let fixture: ComponentFixture<MyComp8747Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8747Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8747Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
