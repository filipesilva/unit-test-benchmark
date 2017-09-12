import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp397Component } from './my-comp-397.component';

describe('MyComp397Component', () => {
  let component: MyComp397Component;
  let fixture: ComponentFixture<MyComp397Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp397Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp397Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
