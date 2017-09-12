import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8020Component } from './my-comp-8020.component';

describe('MyComp8020Component', () => {
  let component: MyComp8020Component;
  let fixture: ComponentFixture<MyComp8020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
