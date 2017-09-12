import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7620Component } from './my-comp-7620.component';

describe('MyComp7620Component', () => {
  let component: MyComp7620Component;
  let fixture: ComponentFixture<MyComp7620Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7620Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7620Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
