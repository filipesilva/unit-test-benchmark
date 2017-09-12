import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7670Component } from './my-comp-7670.component';

describe('MyComp7670Component', () => {
  let component: MyComp7670Component;
  let fixture: ComponentFixture<MyComp7670Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7670Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7670Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
