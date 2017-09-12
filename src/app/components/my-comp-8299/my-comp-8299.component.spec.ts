import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8299Component } from './my-comp-8299.component';

describe('MyComp8299Component', () => {
  let component: MyComp8299Component;
  let fixture: ComponentFixture<MyComp8299Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8299Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8299Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
