import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp554Component } from './my-comp-554.component';

describe('MyComp554Component', () => {
  let component: MyComp554Component;
  let fixture: ComponentFixture<MyComp554Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp554Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp554Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
