import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4927Component } from './my-comp-4927.component';

describe('MyComp4927Component', () => {
  let component: MyComp4927Component;
  let fixture: ComponentFixture<MyComp4927Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4927Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4927Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
