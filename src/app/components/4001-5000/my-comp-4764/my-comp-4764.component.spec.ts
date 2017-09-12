import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4764Component } from './my-comp-4764.component';

describe('MyComp4764Component', () => {
  let component: MyComp4764Component;
  let fixture: ComponentFixture<MyComp4764Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4764Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4764Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
