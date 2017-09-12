import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6789Component } from './my-comp-6789.component';

describe('MyComp6789Component', () => {
  let component: MyComp6789Component;
  let fixture: ComponentFixture<MyComp6789Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6789Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6789Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
