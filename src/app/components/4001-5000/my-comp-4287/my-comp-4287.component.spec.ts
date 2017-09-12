import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4287Component } from './my-comp-4287.component';

describe('MyComp4287Component', () => {
  let component: MyComp4287Component;
  let fixture: ComponentFixture<MyComp4287Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4287Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4287Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
