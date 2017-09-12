import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp188Component } from './my-comp-188.component';

describe('MyComp188Component', () => {
  let component: MyComp188Component;
  let fixture: ComponentFixture<MyComp188Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp188Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp188Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
