import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5589Component } from './my-comp-5589.component';

describe('MyComp5589Component', () => {
  let component: MyComp5589Component;
  let fixture: ComponentFixture<MyComp5589Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5589Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5589Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
