import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8039Component } from './my-comp-8039.component';

describe('MyComp8039Component', () => {
  let component: MyComp8039Component;
  let fixture: ComponentFixture<MyComp8039Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8039Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8039Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
