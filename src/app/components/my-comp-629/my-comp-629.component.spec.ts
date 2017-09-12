import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp629Component } from './my-comp-629.component';

describe('MyComp629Component', () => {
  let component: MyComp629Component;
  let fixture: ComponentFixture<MyComp629Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp629Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp629Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
