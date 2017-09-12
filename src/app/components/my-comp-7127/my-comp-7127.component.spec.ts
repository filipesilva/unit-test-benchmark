import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7127Component } from './my-comp-7127.component';

describe('MyComp7127Component', () => {
  let component: MyComp7127Component;
  let fixture: ComponentFixture<MyComp7127Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7127Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
