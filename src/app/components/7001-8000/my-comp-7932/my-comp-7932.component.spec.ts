import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7932Component } from './my-comp-7932.component';

describe('MyComp7932Component', () => {
  let component: MyComp7932Component;
  let fixture: ComponentFixture<MyComp7932Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7932Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7932Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
