import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8775Component } from './my-comp-8775.component';

describe('MyComp8775Component', () => {
  let component: MyComp8775Component;
  let fixture: ComponentFixture<MyComp8775Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8775Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8775Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
