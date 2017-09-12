import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2049Component } from './my-comp-2049.component';

describe('MyComp2049Component', () => {
  let component: MyComp2049Component;
  let fixture: ComponentFixture<MyComp2049Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2049Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2049Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
