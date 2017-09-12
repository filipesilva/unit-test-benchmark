import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4976Component } from './my-comp-4976.component';

describe('MyComp4976Component', () => {
  let component: MyComp4976Component;
  let fixture: ComponentFixture<MyComp4976Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4976Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4976Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
