import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8417Component } from './my-comp-8417.component';

describe('MyComp8417Component', () => {
  let component: MyComp8417Component;
  let fixture: ComponentFixture<MyComp8417Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8417Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8417Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
