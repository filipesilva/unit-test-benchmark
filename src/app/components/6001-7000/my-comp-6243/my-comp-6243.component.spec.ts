import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6243Component } from './my-comp-6243.component';

describe('MyComp6243Component', () => {
  let component: MyComp6243Component;
  let fixture: ComponentFixture<MyComp6243Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6243Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6243Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
