import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4724Component } from './my-comp-4724.component';

describe('MyComp4724Component', () => {
  let component: MyComp4724Component;
  let fixture: ComponentFixture<MyComp4724Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4724Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4724Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
