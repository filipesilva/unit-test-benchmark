import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp394Component } from './my-comp-394.component';

describe('MyComp394Component', () => {
  let component: MyComp394Component;
  let fixture: ComponentFixture<MyComp394Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp394Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp394Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
