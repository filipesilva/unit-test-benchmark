import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4279Component } from './my-comp-4279.component';

describe('MyComp4279Component', () => {
  let component: MyComp4279Component;
  let fixture: ComponentFixture<MyComp4279Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4279Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4279Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
