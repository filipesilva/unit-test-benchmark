import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7880Component } from './my-comp-7880.component';

describe('MyComp7880Component', () => {
  let component: MyComp7880Component;
  let fixture: ComponentFixture<MyComp7880Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7880Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7880Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
