import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5708Component } from './my-comp-5708.component';

describe('MyComp5708Component', () => {
  let component: MyComp5708Component;
  let fixture: ComponentFixture<MyComp5708Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5708Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5708Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
