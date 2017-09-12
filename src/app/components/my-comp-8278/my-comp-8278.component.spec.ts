import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8278Component } from './my-comp-8278.component';

describe('MyComp8278Component', () => {
  let component: MyComp8278Component;
  let fixture: ComponentFixture<MyComp8278Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8278Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8278Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
