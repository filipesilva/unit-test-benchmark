import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp567Component } from './my-comp-567.component';

describe('MyComp567Component', () => {
  let component: MyComp567Component;
  let fixture: ComponentFixture<MyComp567Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp567Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp567Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
