import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5357Component } from './my-comp-5357.component';

describe('MyComp5357Component', () => {
  let component: MyComp5357Component;
  let fixture: ComponentFixture<MyComp5357Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5357Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5357Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
