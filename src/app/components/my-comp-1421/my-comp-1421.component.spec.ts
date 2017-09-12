import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1421Component } from './my-comp-1421.component';

describe('MyComp1421Component', () => {
  let component: MyComp1421Component;
  let fixture: ComponentFixture<MyComp1421Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1421Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1421Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
