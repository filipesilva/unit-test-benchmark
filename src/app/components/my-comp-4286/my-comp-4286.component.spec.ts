import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4286Component } from './my-comp-4286.component';

describe('MyComp4286Component', () => {
  let component: MyComp4286Component;
  let fixture: ComponentFixture<MyComp4286Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4286Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4286Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
