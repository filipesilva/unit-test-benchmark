import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8770Component } from './my-comp-8770.component';

describe('MyComp8770Component', () => {
  let component: MyComp8770Component;
  let fixture: ComponentFixture<MyComp8770Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8770Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8770Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
