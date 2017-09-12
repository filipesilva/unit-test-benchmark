import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9576Component } from './my-comp-9576.component';

describe('MyComp9576Component', () => {
  let component: MyComp9576Component;
  let fixture: ComponentFixture<MyComp9576Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9576Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9576Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
