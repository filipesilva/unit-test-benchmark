import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6793Component } from './my-comp-6793.component';

describe('MyComp6793Component', () => {
  let component: MyComp6793Component;
  let fixture: ComponentFixture<MyComp6793Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6793Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6793Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
