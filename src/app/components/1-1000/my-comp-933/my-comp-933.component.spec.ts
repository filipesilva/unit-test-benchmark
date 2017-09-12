import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp933Component } from './my-comp-933.component';

describe('MyComp933Component', () => {
  let component: MyComp933Component;
  let fixture: ComponentFixture<MyComp933Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp933Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp933Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
