import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5999Component } from './my-comp-5999.component';

describe('MyComp5999Component', () => {
  let component: MyComp5999Component;
  let fixture: ComponentFixture<MyComp5999Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5999Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5999Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
