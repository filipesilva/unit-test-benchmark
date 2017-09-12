import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp972Component } from './my-comp-972.component';

describe('MyComp972Component', () => {
  let component: MyComp972Component;
  let fixture: ComponentFixture<MyComp972Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp972Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp972Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
