import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7708Component } from './my-comp-7708.component';

describe('MyComp7708Component', () => {
  let component: MyComp7708Component;
  let fixture: ComponentFixture<MyComp7708Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7708Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7708Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
