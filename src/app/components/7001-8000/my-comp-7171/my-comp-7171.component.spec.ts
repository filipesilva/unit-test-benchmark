import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7171Component } from './my-comp-7171.component';

describe('MyComp7171Component', () => {
  let component: MyComp7171Component;
  let fixture: ComponentFixture<MyComp7171Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7171Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
