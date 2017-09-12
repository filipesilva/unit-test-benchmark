import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8610Component } from './my-comp-8610.component';

describe('MyComp8610Component', () => {
  let component: MyComp8610Component;
  let fixture: ComponentFixture<MyComp8610Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8610Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8610Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
