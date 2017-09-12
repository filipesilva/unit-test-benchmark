import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9972Component } from './my-comp-9972.component';

describe('MyComp9972Component', () => {
  let component: MyComp9972Component;
  let fixture: ComponentFixture<MyComp9972Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9972Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9972Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
