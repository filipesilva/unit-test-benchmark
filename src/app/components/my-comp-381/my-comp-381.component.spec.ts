import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp381Component } from './my-comp-381.component';

describe('MyComp381Component', () => {
  let component: MyComp381Component;
  let fixture: ComponentFixture<MyComp381Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp381Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp381Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
