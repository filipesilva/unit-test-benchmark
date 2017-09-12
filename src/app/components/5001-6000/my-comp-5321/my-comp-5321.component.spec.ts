import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5321Component } from './my-comp-5321.component';

describe('MyComp5321Component', () => {
  let component: MyComp5321Component;
  let fixture: ComponentFixture<MyComp5321Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5321Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5321Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
