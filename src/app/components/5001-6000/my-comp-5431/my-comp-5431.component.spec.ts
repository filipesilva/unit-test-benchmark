import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5431Component } from './my-comp-5431.component';

describe('MyComp5431Component', () => {
  let component: MyComp5431Component;
  let fixture: ComponentFixture<MyComp5431Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5431Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5431Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
