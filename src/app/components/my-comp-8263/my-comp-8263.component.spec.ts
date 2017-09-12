import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8263Component } from './my-comp-8263.component';

describe('MyComp8263Component', () => {
  let component: MyComp8263Component;
  let fixture: ComponentFixture<MyComp8263Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8263Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8263Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
