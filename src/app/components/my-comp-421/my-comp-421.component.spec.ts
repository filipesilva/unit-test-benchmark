import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp421Component } from './my-comp-421.component';

describe('MyComp421Component', () => {
  let component: MyComp421Component;
  let fixture: ComponentFixture<MyComp421Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp421Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp421Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
