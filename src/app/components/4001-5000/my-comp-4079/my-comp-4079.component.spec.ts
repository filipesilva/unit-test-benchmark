import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4079Component } from './my-comp-4079.component';

describe('MyComp4079Component', () => {
  let component: MyComp4079Component;
  let fixture: ComponentFixture<MyComp4079Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4079Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4079Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
