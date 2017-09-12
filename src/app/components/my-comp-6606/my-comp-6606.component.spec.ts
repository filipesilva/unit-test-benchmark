import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6606Component } from './my-comp-6606.component';

describe('MyComp6606Component', () => {
  let component: MyComp6606Component;
  let fixture: ComponentFixture<MyComp6606Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6606Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6606Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
