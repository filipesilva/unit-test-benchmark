import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4295Component } from './my-comp-4295.component';

describe('MyComp4295Component', () => {
  let component: MyComp4295Component;
  let fixture: ComponentFixture<MyComp4295Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4295Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4295Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
