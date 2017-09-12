import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5696Component } from './my-comp-5696.component';

describe('MyComp5696Component', () => {
  let component: MyComp5696Component;
  let fixture: ComponentFixture<MyComp5696Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5696Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5696Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
