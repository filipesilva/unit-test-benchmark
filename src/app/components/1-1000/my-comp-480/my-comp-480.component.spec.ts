import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp480Component } from './my-comp-480.component';

describe('MyComp480Component', () => {
  let component: MyComp480Component;
  let fixture: ComponentFixture<MyComp480Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp480Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp480Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
