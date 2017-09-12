import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6402Component } from './my-comp-6402.component';

describe('MyComp6402Component', () => {
  let component: MyComp6402Component;
  let fixture: ComponentFixture<MyComp6402Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6402Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6402Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
