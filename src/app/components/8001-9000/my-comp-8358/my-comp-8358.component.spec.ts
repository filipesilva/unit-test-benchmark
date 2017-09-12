import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8358Component } from './my-comp-8358.component';

describe('MyComp8358Component', () => {
  let component: MyComp8358Component;
  let fixture: ComponentFixture<MyComp8358Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8358Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8358Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
