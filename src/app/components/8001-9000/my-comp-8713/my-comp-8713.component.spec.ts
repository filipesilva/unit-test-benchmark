import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8713Component } from './my-comp-8713.component';

describe('MyComp8713Component', () => {
  let component: MyComp8713Component;
  let fixture: ComponentFixture<MyComp8713Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8713Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8713Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
