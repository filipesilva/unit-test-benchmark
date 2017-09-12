import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8375Component } from './my-comp-8375.component';

describe('MyComp8375Component', () => {
  let component: MyComp8375Component;
  let fixture: ComponentFixture<MyComp8375Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8375Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8375Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
