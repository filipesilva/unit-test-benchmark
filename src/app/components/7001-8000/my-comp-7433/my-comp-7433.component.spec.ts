import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7433Component } from './my-comp-7433.component';

describe('MyComp7433Component', () => {
  let component: MyComp7433Component;
  let fixture: ComponentFixture<MyComp7433Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7433Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7433Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
