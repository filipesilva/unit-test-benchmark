import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4393Component } from './my-comp-4393.component';

describe('MyComp4393Component', () => {
  let component: MyComp4393Component;
  let fixture: ComponentFixture<MyComp4393Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4393Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4393Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
