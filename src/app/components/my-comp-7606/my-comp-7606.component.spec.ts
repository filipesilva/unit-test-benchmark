import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7606Component } from './my-comp-7606.component';

describe('MyComp7606Component', () => {
  let component: MyComp7606Component;
  let fixture: ComponentFixture<MyComp7606Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7606Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7606Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
