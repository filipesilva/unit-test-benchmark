import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6394Component } from './my-comp-6394.component';

describe('MyComp6394Component', () => {
  let component: MyComp6394Component;
  let fixture: ComponentFixture<MyComp6394Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6394Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6394Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
