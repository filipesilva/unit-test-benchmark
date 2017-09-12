import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4552Component } from './my-comp-4552.component';

describe('MyComp4552Component', () => {
  let component: MyComp4552Component;
  let fixture: ComponentFixture<MyComp4552Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4552Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4552Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
