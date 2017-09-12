import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4020Component } from './my-comp-4020.component';

describe('MyComp4020Component', () => {
  let component: MyComp4020Component;
  let fixture: ComponentFixture<MyComp4020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
