import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4989Component } from './my-comp-4989.component';

describe('MyComp4989Component', () => {
  let component: MyComp4989Component;
  let fixture: ComponentFixture<MyComp4989Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4989Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4989Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
