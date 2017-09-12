import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7984Component } from './my-comp-7984.component';

describe('MyComp7984Component', () => {
  let component: MyComp7984Component;
  let fixture: ComponentFixture<MyComp7984Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7984Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7984Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
