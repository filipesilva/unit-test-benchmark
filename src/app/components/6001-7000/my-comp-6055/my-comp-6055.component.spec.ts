import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6055Component } from './my-comp-6055.component';

describe('MyComp6055Component', () => {
  let component: MyComp6055Component;
  let fixture: ComponentFixture<MyComp6055Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6055Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6055Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
