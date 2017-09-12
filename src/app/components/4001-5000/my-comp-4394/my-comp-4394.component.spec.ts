import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4394Component } from './my-comp-4394.component';

describe('MyComp4394Component', () => {
  let component: MyComp4394Component;
  let fixture: ComponentFixture<MyComp4394Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4394Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4394Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
