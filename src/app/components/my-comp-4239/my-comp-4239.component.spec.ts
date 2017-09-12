import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4239Component } from './my-comp-4239.component';

describe('MyComp4239Component', () => {
  let component: MyComp4239Component;
  let fixture: ComponentFixture<MyComp4239Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4239Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4239Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
