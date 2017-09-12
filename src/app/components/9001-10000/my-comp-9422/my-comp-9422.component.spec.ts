import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9422Component } from './my-comp-9422.component';

describe('MyComp9422Component', () => {
  let component: MyComp9422Component;
  let fixture: ComponentFixture<MyComp9422Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9422Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9422Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
