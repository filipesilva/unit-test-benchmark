import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8273Component } from './my-comp-8273.component';

describe('MyComp8273Component', () => {
  let component: MyComp8273Component;
  let fixture: ComponentFixture<MyComp8273Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8273Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8273Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
