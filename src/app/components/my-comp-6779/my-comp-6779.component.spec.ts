import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6779Component } from './my-comp-6779.component';

describe('MyComp6779Component', () => {
  let component: MyComp6779Component;
  let fixture: ComponentFixture<MyComp6779Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6779Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6779Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
