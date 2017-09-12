import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp606Component } from './my-comp-606.component';

describe('MyComp606Component', () => {
  let component: MyComp606Component;
  let fixture: ComponentFixture<MyComp606Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp606Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp606Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
