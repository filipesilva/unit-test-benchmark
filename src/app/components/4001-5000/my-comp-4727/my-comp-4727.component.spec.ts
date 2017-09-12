import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4727Component } from './my-comp-4727.component';

describe('MyComp4727Component', () => {
  let component: MyComp4727Component;
  let fixture: ComponentFixture<MyComp4727Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4727Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4727Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
