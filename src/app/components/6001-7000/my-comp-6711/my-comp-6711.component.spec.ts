import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6711Component } from './my-comp-6711.component';

describe('MyComp6711Component', () => {
  let component: MyComp6711Component;
  let fixture: ComponentFixture<MyComp6711Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6711Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6711Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
