import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8110Component } from './my-comp-8110.component';

describe('MyComp8110Component', () => {
  let component: MyComp8110Component;
  let fixture: ComponentFixture<MyComp8110Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8110Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
