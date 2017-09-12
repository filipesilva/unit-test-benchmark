import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9393Component } from './my-comp-9393.component';

describe('MyComp9393Component', () => {
  let component: MyComp9393Component;
  let fixture: ComponentFixture<MyComp9393Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9393Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9393Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
