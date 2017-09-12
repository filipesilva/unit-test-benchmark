import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6950Component } from './my-comp-6950.component';

describe('MyComp6950Component', () => {
  let component: MyComp6950Component;
  let fixture: ComponentFixture<MyComp6950Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6950Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6950Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
